# 8、Docker中的镜像分层

参考文档：http://www.maiziedu.com/wiki/cloud/dockerimage

Docker 支持通过扩展现有镜像，创建新的镜像。实际上，Docker Hub 中 99% 的镜像都是通过在 base 镜像中安装和配置需要的软件构建出来的。
![](https://p3-sign.toutiaoimg.com/pgc-image/36e18f32d3e24b0886a69d5d4167354b~noop.image?_iz=58558&from=article.pc_detail&x-expires=1681741359&x-signature=zh%2FvIZ1%2Ffk9G1JrdT9PvDpt41bY%3D)
从上图可以看到，新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层。

## 8.1 Docker 镜像为什么分层

镜像分层最大的一个好处就是共享资源。

比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像；同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。

如果多个容器共享一份基础镜像，当某个容器修改了基础镜像的内容，比如 /etc 下的文件，这时其他容器的 /etc 是不会被修改的，修改只会被限制在单个容器内。这就是容器 Copy-on-Write 特性。
## 8.2 可写的容器层
当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。
![](https://p3-sign.toutiaoimg.com/pgc-image/113f5e3e1a43449c8becded702e888d7~noop.image?_iz=58558&from=article.pc_detail&x-expires=1681741359&x-signature=IrAsY%2BLLU3LQnSbU2P1rzl%2F7CRY%3D)
所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。
## 8.3 容器层的细节说明
镜像层数量可能会很多，所有镜像层会联合在一起组成一个统一的文件系统。如果不同层中有一个相同路径的文件，比如 /a，上层的 /a 会覆盖下层的 /a，也就是说用户只能访问到上层中的文件 /a。在容器层中，用户看到的是一个叠加之后的文件系统。

#### 文件操作说明
|  文件操作   | 说明  |
|  ----  | ----  |
| 添加文件  | 在容器中创建文件时，新文件被添加到容器层中。 |
| 读取文件  | 在容器中读取某个文件时，Docker **会从上往下依次在各镜像层中查找此文件**。一旦找到，**立即将其复制到容器层，然后打开并读入内存**。 |
| 修改文件  | 在容器中修改已存在的文件时，Docker **会从上往下依次在各镜像层中查找此文件**。一旦找到，立即将其复制到容器层，然后修改之。 |
| 删除文件  | 在容器中删除文件时，Docker 也是从上往下依次在镜像层中查找此文件。找到后，会在容器层中**记录下此删除操作**。（只是记录删除操作） |
只有当需要修改时才复制一份数据，这种特性被称作 Copy-on-Write。可见，容器层保存的是镜像变化的部分，不会对镜像本身进行任何修改。

这样就解释了我们前面提出的问题：容器层记录对镜像的修改，所有镜像层都是只读的，不会被容器修改，所以镜像可以被多个容器共享。
