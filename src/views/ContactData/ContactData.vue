<template>
  <SlotForm>
    <template #Center>
      <div id="register-form">
        <form action="#" class="form">
          <h2 class="text-center">Dados de Endereço</h2>
          <!-- Progress bar -->
          <div class="progressbar">
            <div class="progress" id="progress"></div>

            <div class="progress-step" data-title="Dados Pessoais"></div>
            <div class="progress-step progress-step-active" data-title="Dados de Endereço"></div>
            <div class="progress-step" data-title="Conclusão"></div>

          </div>

          <!-- Steps -->
          <div class="form-step form-step-active">
            <div class="input-group">
              <label for="name">País</label>
              <input type="text" name="país" id="país" placeholder="" />
            </div>
            <div class="input-group">
              <label for="estado">Estado</label>
              <input type="text" name="estado" id="estado" placeholder="" />
            </div>
            <div class="input-group">
              <label for="cidade">Cidade</label>
              <input type="text" name="cidade" id="cidade" placeholder="" />
            </div>
            <div class="input-group">
              <label for="rua">Rua</label>
              <input type="text" name="rua" id="rua" placeholder="" />
            </div>
            <div class="input-group">
              <label for="cep">CEP</label>
              <input type="text" name="cep" id="telefone" placeholder="" />
            </div>
            <div class="">
              <router-link to="/personalData"><button class="btn" id="btn-back"> Voltar</button></router-link>
              <router-link to="/conclusionData"><button class="btn" id="btn-confirm"> Confirmar</button></router-link>
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

}
</script>

<style scoped>
div {
  display: flex;
}

label {
  width: 20%;
  display: flex;
  margin-bottom: 0.5rem;
}

.checkbox-container {
  margin: auto;
}

span {
  margin-left: 5px;
}

input {
  display: flex;
  width: 80%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.width-50 {
  width: 50%;
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
  counter-reset: step;
  margin: 2rem 0 4rem;
}

.progressbar::before,
.progress {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  background-color: #dcdcdc;
  z-index: -1;
}

.progress {
  background-color: var(--primary-color);
  width: 0%;
  transition: 0.3s;
}

.progress-step {
  width: 2.1875rem;
  height: 2.1875rem;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-step::before {
  counter-increment: step;
  content: counter(step);
}

.progress-step::after {
  content: attr(data-title);
  position: absolute;
  top: calc(100% + 0.5rem);
  font-size: 10px;
  color: #666;
}

.progress-step-active {
  background-color: rgb(131, 235, 131);
  color: black;
}

/* Form */
.form {
  width: clamp(420px, 100%, 400px);
  margin: 0 auto;
  border: 2px solid #ccc;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.btn {
  border: none;
  width: 100px;
  padding: 0.6rem;
  display: inline;
  background-color: rgba(224, 43, 87, 1);
  color: #f3f3f3;
  text-align: center;
  border-radius: 5.00rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 13px;
  font-weight: bold;
}

#btn-confirm {
  margin-left: 220px;
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
