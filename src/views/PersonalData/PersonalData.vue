<template>
  <SlotForm>
    <template #Center>
      <div id="register-form">
        <form action="#" class="form">
          <h2 class="text-center">Dados Pessoais</h2>
          <!-- Progress bar -->
          <div class="progressbar">
            <div class="progress" id="progress"></div>

            <div class="progress-step progress-step-active"></div>
            <div class="progress-step"></div>
            <div class="progress-step"></div>

          </div>

          <!-- Steps -->
          <section style="display: flex; width: 100%;">
            <div class="input-group" style="width:100%">
              <label for="name">Nome Completo</label>
              <input type="text" name="name" id="name" placeholder="Digite seu nome" style="width: 88%" />
            </div>
          </section>
          <section style="display: flex; width: 100%;">
            <div class="input-group" style="width: 50%">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Digite seu email" />
            </div>
            <div class="input-group" style="width: 50%">
              <label for="email">Confirmar Email</label>
              <input type="text" name="email" id="email" placeholder="Digite seu email" />
            </div>
          </section>
          <section style="display: flex; width: 100%">
            <div class="input-group" style="width: 50%">
              <label for="cpf">CPF</label>
              <input type="text" name="cpf" id="cpf" placeholder="___.___.___-__ " />
            </div>
            <div class="input-group" style="width: 50%">
              <label for="telefone">Telefone</label>
              <input type="text" name="telefone" id="telefone" placeholder="(xx) x xxxx-xxxx" />
            </div>
          </section>
          <section style="display: flex; width: 100%">
            <div class="input-group" style="width: 100%">
              <label for="dataNasc">Data de Nascimento</label>
              <input type="date" id="dataNasc" name="dataNasc">
            </div>
          </section>

          <section style="display: flex;width: 100%">
            <div style="width: 100%">
              <label for="opcionais" id="opcionais-title">Ao finalizar, confira se os dados estão corretos</label>
              <label for="opcionais" id="opcionais-title">Gostaria de receber novidades por:</label>
            </div>
          </section>
          <section style="display: flex;width: 100%">
            <div class="checkbox-container" style="width:100%">
              <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="Email">
              <span>Email</span>
            </div>
          </section>

          <section style="display: flex;width: 100%">
            <div class="checkbox-container" style="width: 100%">
              <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="Whatsapp">
              <span>Whatsapp</span>
            </div>
          </section>
          <br>
          <section>
            <div>
              <h6>Ao prosseguir você concorda com todos os nossos termos e condições.</h6>
            </div>
          </section>
          <br>
          <div class="">
            <router-link to="/contactData"><button class="btn"> Confirmar</button></router-link>
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
  }
}
</script>

<style scoped>
section {
  display: flex;
  width: 100%;
}

label {
  width: 80%;
  display: flex;
  margin-bottom: 0.2rem;
  font-size: 11px;
  font-weight: bold;
}

.checkbox-container {
  margin: 3px;
  font-size: 10px;
}

span {
  margin-left: 5px;
}

input {
  padding: 0.7rem;
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

.input-group {
  margin: 7px 0;
  font-size: 11px;
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
  padding: 0.6rem;
  margin-left: 300px;
  display: inline;
  background-color: rgba(224, 43, 87, 1);
  color: white;
  text-align: center;
  border-radius: 5.00rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 13px;
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
