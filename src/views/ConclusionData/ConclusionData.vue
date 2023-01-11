<template>
  <SlotForm>
    <template #Center>
      <div id="register-form">
        <form action="#" class="form">
          <h2 class="text-center">Conclusão</h2>
          <!-- Progress bar -->
          <div class="progressbar">
            <div class="progress" id="progress"></div>

            <div class="progress-step progress-step-active"></div>
            <div class="progress-step progress-step-active"></div>
            <div class="progress-step progress-step-active"></div>

          </div>

          <!-- Steps -->
          <div class="form-step form-step-active">
            <div class="input-group">
              <img :src="imageCheck">
              <h1>Cadastro finalizado</h1>
              <h5>Caso queira voltar a página inicial clique no botão abaixo</h5>
              <router-link to="/"><button class="btn"> Página Inicial</button></router-link>
            </div>
          </div>
        </form>
      </div>
    </template>

  </SlotForm>

</template>

<script>
import SlotForm from "@/components/Register/SlotForm.vue"

export default {
  name: 'PersonalData',
  components: {
    SlotForm,
  },
  data() {
    return {
      imageCheck: "img/checked.png"
    }
  }
}
</script>

<style scoped>
img {
  margin-top: 4px;
  width: 80px;
  height: 80px;
  margin-left: 170px;
}

.width-50 {
  width: 50%;
}

h1 {
  margin-top: 30px;
  text-align: center;
}

h5 {
  margin-top: 20px;
  text-align: center;
}

.ml-auto {
  margin-left: auto;
}

.text-center {
  text-align: center;
}

/* Progressbar */
.progressbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem;
}

.progressbar::before,
.progress {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  width: 100%;
  background-color: rgba(224, 43, 87, 1);
  z-index: -1;
}

.progress {
  background-color: var(--primary-color);
  width: 0%;
  transition: 0.3s;
}

.progress-step {
  width: 0.6rem;
  height: 0.6rem;
  background-color: #f5f3f3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(224, 43, 87, 1);
}

.progress-step-active {
  background-color: rgba(224, 43, 87, 1);
}

/* Form */
.form {
  width: clamp(420px, 100%, 400px);
  margin: 0 auto;
  border-radius: 0.35rem;
  padding: 1.5rem;
}

.form-step {
  display: none;
  transform-origin: top;
  animation: animate 0.5s;
}

.form-step-active {
  display: block;
}

.input-group {
  margin: 10px 0;
  font-size: 13px;
  font-weight: bold;
}

@keyframes animate {
  from {
    transform: scale(1, 0);
    opacity: 0;
  }

  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}

/* Button */
.btns-group {
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.btn {
  border: none;
  width: 100px;
  padding: 0.5rem;
  margin-top: 30px;
  margin-left: 160px;
  display: inline;
  background-color: rgba(224, 43, 87, 1);
  color: #f3f3f3;
  text-align: center;
  border-radius: 5.00rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 10px;
  font-weight: bold;
}

.btn:hover {
  color: rgba(224, 43, 87, 1);
  background-color: rgb(220, 217, 217);
  border: 1px solid black;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
}
</style>
