<script>
export default {
  name: "FlowerRegistration"
}
</script>

<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">

          <div class="d-flex align-items-center justify-content-center h-100">

            <form class="w-75">

              <h3 class="fw-normal mb-3 pb-3">Регистрация</h3>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label">E-mail адресс</label>
                <input type="email" class="form-control form-control-lg" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Пароль</label>
                <input type="password" id="form2Example28" class="form-control form-control-lg" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Повторите пароль</label>
                <input type="password" id="form2Example28" class="form-control form-control-lg" />
              </div>

              <div class="d-flex pt-1 mb-4 justify-content-between align-items-end w-100">
                <button class="btn btn-lg btn-link link-secondary px-0" type="button" @click="this.$router.push({ name: 'Home' })">На главную</button>
                <button class="btn btn-outline-success btn-lg" type="button">Войти</button>
              </div>

              <p>Уже есть аккаунта? <a href="login" class="link-success">Авторизируйтесь!</a></p>

            </form>

          </div>

        </div>

        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="../../assets/register_flower_shop_img.jpg" alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
