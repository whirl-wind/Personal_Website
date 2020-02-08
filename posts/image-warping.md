---
title: Image warping
disc: This document summarized the algorithms of our image warping solution for further study, and there is a detailed description about the implementation of these algorithms.
path: image-warping
date: Aug 16 2019
---

### Report on Image warping

<a href="../images/articles/research_02/Report_on_Image_warping.pdf">PDF online</a>

#### Inverse distance weighted interpolation

Inverse distance-weighted interpolation methods were originally proposed by Shepard and improved by a number of other authors, notably Franke and Nielson.

![IDW_01](../images/articles/research_02/idw_1.jpg)
![IDW_02](../images/articles/research_02/idw_2.jpg)

#### Radial basis function transform image warping

Transformations based on radial basis functions have proven to be a powerful tool in image warping.

![RBF_01](../images/articles/research_02/rbf_1.jpg)
![RBF_02](../images/articles/research_02/rbf_2.jpg)

#### Compare

From the figure below, we can simpliy feel that IDW is a little bit good at the fold-over control. On the other hand, the image warped by RBF is semed more flexible and ductile. (IDW(left) vs RBF(right))

&emsp;&emsp;&emsp;&emsp;&emsp;
<img src="../images/articles/research_02/cp.jpg" height = "200" alt="IDW(left)vsRBF(right)" />

#### FillHole

In order to fix the white line problem of my warping class, I figure out a simple way to fill the white hole. By using the pixel near the target point, the color of the white hole can be easily approximated.

&emsp;&emsp; &emsp;&emsp; &emsp;
<img src="../images/articles/research_02/fh_1.jpg" width = "150" height = "150" alt="图片名称" align= "center" />
&emsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
<img src="../images/articles/research_02/fh_2.jpg" width = "150" height = "150" alt="图片名称" align=center />