<template>
  <footer class="footer">
    <section>
      <h3>Síguenos también en:</h3>
      <ul class="list">
        <li class="list-item">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src="@/assets/social-icons/facebook-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="@/assets/social-icons/instagram-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.linkedin.com/" target="_blank">
            <img
              src="@/assets/social-icons/linkedin-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.pinterest.es/" target="_blank">
            <img
              src="@/assets/social-icons/pinterest-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.tiktok.com/es/" target="_blank">
            <img
              src="@/assets/social-icons/tiktok-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://twitter.com/" target="_blank">
            <img
              src="@/assets/social-icons/twitter-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.whatsapp.com/" target="_blank">
            <img
              src="@/assets/social-icons/whatsapp-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
        <li class="list-item">
          <a href="https://www.youtube.com/" target="_blank">
            <img
              src="@/assets/social-icons/youtube-icon.svg"
              alt="facebook logo"
              class="social-icon"
            />
          </a>
        </li>
      </ul>
    </section>
    <p>© Blogs de hoy en día, S.L.</p>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
<style scoped lang="scss">
.footer {
  background: #ededed;
  margin: 0 auto;
  width: 100%;
}
.list {
  display: flex;
  list-style-type: none;
  justify-content: center;
  width: 100vw;
  flex-wrap: wrap;
  padding: 0;
}
.social-icon {
  width: 2.5rem;
  padding: 0.5rem;
}
</style>
