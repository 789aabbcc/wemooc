
<template>
    <el-row>
        <el-col :span="24">
            <el-form
                    :model="addForm"
                    :rules="rules"
                    ref="addForm"
                    status-icon
                    label-width="130px"
                    class="demo-ruleForm">
                <div class="form_upload">
                    <el-upload
                            class="avatar-uploader"
                            action="你要必选参数，上传的地址"
                            :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <span class="upload_span">支持大小不超过2M的JPG,GIF,PNG图片上传</span>
                </div>
                <el-col :span="24" class="form_bottom">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('addForm')"> 确 定 </el-button>
                        <el-button @click="resetForm('addForm')"> 取 消 </el-button>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
  export default {
    data() {
      return {
        // form表单里绑定的数据
        addForm: {
          headImg: "", // 上传头像
        },
        // 头像上传
        editHeadImgUrl: "向后台请求的URL",
        // 头像上传
        imaegUrlId: '',
        imageUrl: '',
        imageData: {
          deviceType: "",
          id: ""
        },
      }
      methods: {
        // 提交
        submitForm(formName)
        {
          let _this = this;
          let tempObject = this.addForm;
          tempObject.headImg = this.imageId;
          let NewpartyForm = JSON.stringify(tempObject);
          this.$http.post(
            this.creatPartyMemberUrl,
            NewpartyForm
          ).then(
            (res) => {
              let success = res.data.success;
              let msgMsg = res.data.message;
              if (success) {
                _this.$message("创建成功");
                this.$router.push('PartyMemberList');
              } else {
                _this.$message.error(msgMsg + "请检查输入内容!");
              }
              console.log(res);
            }
          );

        }
        //上传获取ID
        handleAvatarSuccess(res, file)
        {
          this.imageUrl = URL.createObjectURL(file.raw);
          this.imageId = res.data.id;
          this.addForm.headImg = res.data.id;
          this.imaegUrlId = res.data.id;
        }

        // 上传
        beforeAvatarUpload(file)
        {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
    }
  }
</script>
<style coped>
    /* 上传头像样式 */
    .avatar-uploader .el-upload {width: 100%; border: 1px dashed #d9d9d9;border-radius: 6px;cursor: pointer; position: relative; overflow: hidden;}
    .avatar-uploader .el-upload:hover {border-color: #409EFF;}
    .avatar-uploader-icon {font-size: 28px; color: #8c939d;line-height: 178px; text-align: center;}
    .avatar {width: 100%;height: 230px; display: block;}
    .avatar-uploader{padding: 10px;width: 80%;/* border: 1px solid #8c939d; */text-align: center;margin-left: 15px;}
    .form_upload{height: 284px;}
    .upload_span{font-size: 14px; color: #e4e4e4; display: block; padding: 10px;text-align: center;line-height: 20px;}
</style>
