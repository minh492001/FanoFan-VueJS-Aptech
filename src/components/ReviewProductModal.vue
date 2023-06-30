<template>
  <div v-if="showModalReview" class="modal" @click="handleClose">
    <div class="modal__container " @click.stop v-if="!active">
      <div class="modal__header border-bottom py-2">
        <h1 class="modal__title">Your review</h1>
        <i class="fa-solid fa-x" @click="handleClose"></i>
      </div>
      <form action="" method="post" @submit.prevent="postComment">
        <div class="modal__body">
          <div class="main">
            <p class="alert-success alert" v-if="notificationMes">{{notificationMes}}</p>
            <div class="rating">
              <div class="rating-star">
                <label>Rating <span class="red">*</span></label>
                <div class="star">
                  <input type="radio" name="rating" v-model="selectedReason" :value="5">
                  <input type="radio" name="rating" v-model="selectedReason" :value="4.5">
                  <input type="radio" name="rating" v-model="selectedReason" :value="4">
                  <input type="radio" name="rating" v-model="selectedReason" :value="3.5">
                  <input type="radio" name="rating" v-model="selectedReason" :value="3">
                  <input type="radio" name="rating" v-model="selectedReason" :value="2.5">
                  <input type="radio" name="rating" v-model="selectedReason" :value="2">
                  <input type="radio" name="rating" v-model="selectedReason" :value="1.5">
                  <input type="radio" name="rating" v-model="selectedReason" :value="1">
                  <input type="radio" name="rating" v-model="selectedReason" :value="0.5">
                </div>
                <span>({{ selectedReason }}<i style="cursor: pointer;" class="fa-solid fa-star"
                                              @click="resetStar"></i>)</span>
              </div>
              <div class="rating-error" style="color: red;" v-if="!isStarSlected">Please select your rating</div>
            </div>

            <div class="comment">
              <label>Comment <span class="red">*</span></label>
              <textarea name="content" id="Comment" cols="50" rows="3" placeholder="Enter your comments"
                        ref="userComment" v-model="userComment.content" @input="CountWord"></textarea>
              <span :class="{ red: isRed }">Please input more than 10 words.</span>
            </div>
            <div class="input-group mb-3">
              <input type="file" class="form-control"
                     name="image[]" @change="changeFile($event)" multiple>
              <span class="input-group-text">Review Photo</span>
            </div>
<!--            <div class="picture">-->
<!--              <label>Review pictures</label>-->
<!--              <label class="drop-zone" @dragover.prevent @drop="handleDrop">-->
<!--                <input type="file" name="image[]" ref="fileInput" style="display: none"-->
<!--                       @change="changeFile($event)"-->
<!--                       multiple-->
<!--                       accept="image/*">-->
<!--                <div v-for="(image, index) in userComment.image" :key="index">-->
<!--                  <img :src="image.url"/>-->
<!--                </div>-->
<!--                <span class="iconAdd" v-if="!is5Pictures"><i class="fa-regular fa-image"></i></span>-->
<!--                <span class="TextAdd" v-if="isImages">Click to add a photo or drag, drop photo here</span>-->
<!--              </label>-->
<!--              <span>(Maximun 5 pictures)</span>-->
<!--            </div>-->
          </div>
        </div>
        <div class="modal__footer">
          <div class="bottom">
<!--            <button type="submit" @click="activate">Submit your review</button>-->
            <button type="submit">Submit your review</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="modal__container__thank bg-white m-auto" @click.stop v-if="active">
    <div class="modal__header border-bottom py-2">
      <h1 class="modal__title">Thanks for your review</h1>
      <i class="fa-solid fa-x" @click="handleClose"></i>
    </div>
    <div class="modal__body">

    </div>
    <div class="modal__footer">
      <div class="bottom">
        <button>Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getCsrfCookie} from "@/helpers";

export default {
  props: {
    showModalReview: {
      type: Boolean
    },
    closeReviewProductModal: {
      type: Function,
    },
    fanID: {type: Number}
  },
  data() {
    return {
      active: false,
      show: true,
      selectedReason: 0,
      isStarSlected: true,
      isRed: false,

      isErrorStar: false,
      isErrorcomment: false,
      userCommentCount: 0,

      isImages: true,
      is5Pictures: false,
      userComment: {
        image: [], content: '',
      },
      notificationMes:''
    }
  },
  methods: {
    changeFile(event) {
      const selectedFile = event.target.files
      if (!selectedFile.length) {
        return false
      }
      for (let i = 0; i < selectedFile.length; i++) {
        this.userComment.image.push(selectedFile[i])
      }
    },

    async postComment() {
      const formData = new FormData()
      formData.append('content', this.userComment.content)
      formData.append('fans_id', this.fanID)
      for (let i = 0; i < this.userComment.image.length; i++) {
        formData.append('image[]', this.userComment.image[i])
      }
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
      })
      await getCsrfCookie()
      await axiosInstance.post(process.env.VUE_APP_API_URL + "comment/make", formData).then(() => {
       // this.active = true
        this.notificationMes = 'Thank for your review'
      }).catch((err) => {
        this.error = err.response.data.errors
      })
    },
    handleClose() {
      this.closeReviewProductModal();
    },
    showReport() {
      this.show = true
    },
    resetStar() {
      this.selectedReason = null
    },
    CountWord() {
      const userCommentText = this.$refs.userComment.value;
      const countWord = userCommentText.split(' ');
      this.userCommentCount = countWord.length
    },
    handleDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (this.userComment.image.length + files.length === 2) {
        this.is5Pictures = true
      }
      if (this.userComment.image.length + files.length > 2) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          this.userComment.image.push({url: reader.result});
        };
        reader.readAsDataURL(file);
      }

      this.isImages = false
    },
    handleFileUpload() {
      const files = this.$refs.fileInput.files;
      if (this.userComment.image.length + files.length === 2) {
        this.is5Pictures = true
      }
      if (this.userComment.image.length + files.length > 2) {
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          this.userComment.image.push({
            url: reader.result
          });
        };
      }
      this.isImages = false
    },
    activate() {
      if (this.selectedReason === 0 || this.selectedReason === null) {
        this.isStarSlected = false
        this.isErrorStar = true
      } else {
        this.isStarSlected = true
        this.isErrorStar = false
      }
      if (this.userCommentCount < 1) {
        this.isErrorcomment = true
        this.isRed = true
      } else {
        this.isErrorcomment = false
        this.isRed = false
      }
      if (!this.isErrorStar && !this.isErrorcomment) {
        this.active = true
      }
      console.log('isRed', this.isRed)
      console.log('isErrorStar', this.isErrorStar)
      console.log('isErrorStar', this.isErrorStar)
      console.log('userComment', this.userComment)
      console.log('userCommentCount', this.userCommentCount)
      console.log('image', this.userComment.image)

    },
    deactivate() {
      this.show = false
      this.active = false
      this.selectedReason = null
      this.userComment = {}
    },
  },
}
</script>

<style lang="css" scoped>
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.modal__container {
  border-radius: 15px;
  width: 800px;
  height: 45vh;
  padding: 10px 20px;
}

.modal__container__thank {
  border-radius: 15px;
  width: 800px;
  height: 27vh;
  padding: 10px 20px;
  background-color: white;
}

.modal__container::-webkit-scrollbar {
  width: 1px;
}

.modal__container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal__container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__body {
  height: 75%;
}

.modal__title {
  font-size: 20px;
  color: var(--main-color);
}


.modal__header i {
  background-color: rgba(216, 216, 216, 0.733);
  padding: 6px 8px;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  font-size: 15px;
}

.header h1 {
  font-size: 35px;
}

.header i {
  background-color: rgba(216, 216, 216, 0.733);
  padding: 6px 8px;
  margin-right: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.header i:hover {
  background-color: rgba(193, 193, 193, 0.733);
  box-shadow: 0 0 3px black;
}

.first .main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main .rating .rating-star {
  display: flex;
  gap: 40px;
}

label {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.red {
  color: red;
}

.main .rating .star {
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  width: 150px;
}

.main .rating .star input {
  cursor: pointer;
  width: 20px;
  height: 40px;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.main .rating .star input::before {
  content: '\f005';
  font-family: fontAwesome;
  font-size: 20px;
  color: rgb(197, 197, 197);
  position: absolute;
  left: 3.5px;
  transition: 0.25s;
}

.main .rating .star input:nth-child(2n+1)::before {
  right: 4px;
  left: initial;
}

.main .rating .star input:hover ~ input::before,
.main .rating .star input:hover::before {
  text-shadow: 0 0 2px black;
}

.main .rating .star input:hover ~ input::before,
.main .rating .star input:hover::before,
.main .rating .star input:checked ~ input::before,
.main .rating .star input:checked::before {
  color: var(--main-color-hover);
}

.main .rating span {
  display: flex;
  align-items: center;
  font-size: 17px;
}

.main .rating span i {
  color: var(--main-color-hover);
}

.main .comment #Comment {
  width: 100%;
  height: 75px;
  border-radius: 10px;
  padding: 12px;
  margin-top: 10px;
  outline: rgb(175, 175, 175);
  transition: 0.5s;
}

.main .comment #Comment:focus {
  border: 1px solid var(--main-color-hover);
  outline: var(--main-color-hover);
  box-shadow: 2px 2px 3px var(--main-color-hover);

}

.main .comment span {
  font-style: italic;
}

.bottom button {
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: var(--main-color);
  color: white;
  font-weight: bold;
}

.bottom button:hover {
  background-color: var(--main-color-hover);
}

.drop-zone {
  border: 1px solid rgb(175, 175, 175);
  border-radius: 10px;
  display: flex;
  gap: 15px;
  padding: 10px 15px;
  width: 100%;
  height: 110px;
  margin: 10px auto 5px;
  transition: 0.5s;
}

.drop-zone:hover {
  border: 1px solid var(--main-color-hover);
  outline: var(--main-color-hover);
  box-shadow: 2px 2px 3px var(--main-color-hover);
  cursor: pointer;
}

.drop-zone .iconAdd {
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: var(--main-color);
  border: 1px solid rgb(175, 175, 175);
  border-radius: 10px;
  transition: 0.5s;

}

.drop-zone .iconAdd:hover {
  scale: 1.05;
  box-shadow: 0 0 1px var(--main-color-hover);
  outline: var(--main-color-hover);
}

.drop-zone .TextAdd {
  font-weight: lighter;
  margin-left: 30px;
  color: rgb(137, 137, 137);
}

.drop-zone img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
  padding: 3px;
  border: 1px solid rgb(175, 175, 175);
  transition: 0.5s;
}

.drop-zone img:hover {
  scale: 1.1;
  box-shadow: 0 0 2px black;
}

@media screen and (max-width: 1514px) {

}
</style>

