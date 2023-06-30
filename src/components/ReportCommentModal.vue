<template>
  <div v-if="showModalComment" class="modal" @click="handleClose">
    <div class="modal__container" @click.stop v-if="!active">
      <div class="modal__header border-bottom py-2">
        <h5 class="modal__title">Report Comment</h5>
        <i class="fa-solid fa-x" @click="handleClose"></i>
      </div>
      <div class="modal__body">
        <div class="first">
          <div class="main container">
            <h2>Please select your problem</h2>
            <label class="reasonReport" v-for="(reason, index) in reasonReport" :key="index"
                   @click="ReasonSelected(reason.value)">
              <input type="radio" name="reasonReport" v-model="selectedReason" :value="reason.value">
              {{ reason.text }}
            </label>
            <span id="inputElse">
                        <span v-if="selectedReason === 'Other'"><input type="text" v-model="otherReason"></span>
                        <span style="color: red" v-if="Otherinputed">{{ Notification }}</span>
                    </span>
          </div>
        </div>
      </div>
      <div class="modal__footer border-top pt-3">
        <div class="footer">
          <button class="cancel" @click="handleClose">Cancel</button>
          <button class="submit" @click="activate">Send</button>
        </div>
      </div>
    </div>

    <div class="modal__container__thank bg-white m-auto" @click.stop v-if="active">
      <div class="modal__header">
        <h5 class="modal__title__thank">Thank you for reporting</h5>
        <i class="fa-solid fa-x" @click="handleClose"></i>
      </div>
      <div class="modal__body__thank" v-if="active">
        <div class="second">
          <hr>
          <div class="main">
            <div class="reason-selected"><i class="fa-solid fa-check"></i> {{ selectedReason }}</div>
            We will review the report and inform you of our decision.
          </div>
          <hr>
          <button @click="handleClose" class="done">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    showModalComment: {type: Boolean},
    closeReportCommentModal: {
      type: Function,
    },
  },
  data() {
    return {
      active: false,
      show: false,
      reasonReport: [
        {
          text: "Profanity review",
          value: "Profanity review"
        },
        {
          text: "Contains offensive, nudity, pornographic images",
          value: "Contains offensive, nudity, pornographic images"
        },
        {
          text: "Spam reviews (junk info)",
          value: "Spam reviews (junk info)"
        },
        {
          text: "Contains personal information",
          value: "Contains personal information"
        },
        {
          text: "Inaccurate/misleading reviews (e.g. reviews and products don't match,...)",
          value: "Inaccurate/misleading reviews"
        },
        {
          text: "Other",
          value: "Other"
        },
      ],
      selectedReason: null,
      Notification: "",
      otherReason: "",
      Otherinputed: false,
    }
  },
  methods: {
    handleClose() {
      this.closeReportCommentModal();
    },
    showReport() {
      this.show = true
    },
    ReasonSelected(value) {
      this.selectedReason = value;
    },
    activate() {
      if (this.selectedReason === null) {
        this.Otherinputed = true
        this.Notification = "Please select your problem!"
      } else {
        if (this.selectedReason === 'Other') {
          if (this.otherReason === "") {
            this.Notification = "Please enter other reason before you send!"
            this.Otherinputed = true
          } else {
            this.active = true
            this.selectedReason = this.otherReason
          }
        } else {
          this.active = true
        }
      }
    },
    deactivate() {
      this.show = false
      this.active = false
      this.otherReason = ''
      this.Otherinputed = false
    }
  },
});

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
  height: 50vh;
  padding: 10px 20px;
}

.modal__container__thank {
  border-radius: 15px;
  width: 800px;
  height: 27vh;
  padding: 10px 20px;
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
  color: var(--error-color);
}
.modal__title__thank{
  font-size: 20px;
  color:#388b82
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

.header i:hover {
  background-color: rgb(199, 199, 199);
  box-shadow: 0 0 3px black;
}

.main h2 {
  font-size: 23px;
  margin: 5px 0 10px;
}

.main {
  display: flex;
  flex-direction: column;
}

.main .reasonReport {
  padding: 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s;
  border-radius: 15px;
}

.main .reasonReport:hover {
  color: var(--error-color);
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}

#inputElse {
  margin: 5px 0 10px;
}

#inputElse input {
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.footer button {
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.submit {
  background-color: rgb(233, 43, 43);
  font-size: 17px;
  color: white;
}

.submit:hover {
  background-color: rgb(195, 17, 17);
}

.cancel:hover {
  background-color: rgb(199, 199, 199);
}

.footer {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.second .reason-selected {
  background-color: var(--main-color);
  color: #fff;
  margin: 0 auto 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 15px;
  max-width: 75%;
  border-radius: 30px;
}

.second .reason-selected i {
  margin-right: 5px;
}

.done {
  width: 100%;
  background-color: #388b82;
  color: white;
  padding: 3px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.done:hover {
  background-color: var(--main-color-hover);
}
</style>






