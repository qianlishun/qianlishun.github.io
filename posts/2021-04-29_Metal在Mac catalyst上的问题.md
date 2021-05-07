---
title: 'Metal在Mac catalyst上的问题'

---
  
　　前不久在做Mac版适配的时候（Mac catalyst），Metal在iOS环境下没有问题，运行正常，  

　　在Mac环境下，发现创建纹理对象时报错，定位到错误位置：  

~~~~{ruby}
buf_input = [m_Device newBufferWithLength:MAX_IMAGE_SIZE options:0];

MTLTextureDescriptor* texDesc = [MTLTextureDescriptor texture2DDescriptorWithPixelFormat:MTLPixelFormatR32Float
                                                                                       width:matSize.height
                                                                                      height:matSize.width
                                                                                   mipmapped:NO];
id<MTLTexture> textureIn = [buf_input newTextureWithDescriptor:texDesc offset:0 bytesPerRow:matSize.height*sizeof(float)];
~~~~  

　　报错信息，提炼出来有效信息：  
~~~~{ruby}
Metal resourceOptions must match backing buffer resource options
~~~~  

　　根据信息推断，应该是因为 buf_input 和 texDesc 对某个option不一致，既然iOS的能正常运行，那就用iOS跑一下，并打印下它们俩的属性。

~~~~{ruby}
texDesc
resourceOptions = MTLResourceCPUCacheModeDefaultCache MTLResourceStorageModeShared MTLResourceHazardTrackingModeDefault  

buf_input
resourceOptions = MTLResourceCPUCacheModeDefaultCache MTLResourceStorageModeShared MTLResourceHazardTrackingModeTracked  
~~~~  

　　然后再打印下Mac的，对比一下，哪里不一样。  

~~~~{ruby}
texDesc
resourceOptions = MTLResourceCPUCacheModeDefaultCache MTLResourceStorageModeManaged MTLResourceHazardTrackingModeDefault  

buf_input
resourceOptions = MTLResourceCPUCacheModeDefaultCache MTLResourceStorageModeShared MTLResourceHazardTrackingModeTracked  
~~~~  

　　对比发现，iOS环境下 texDesc 和 buf_input 这两个对象初始化默认的 MTLResourceStorageMode 都是 MTLResourceStorageModeShared，  

　　而Mac环境下，一个是 MTLResourceStorageModeManaged，一个是 MTLResourceStorageModeShared。  

　　那么修改一下试试，创建texDesc后， 加一句:   
~~~~{ruby}
texDesc.storageMode = MTLStorageModeShared;  
~~~~
　　再次运行，问题解决。


　　

　　




　　