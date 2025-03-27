<script setup lang="ts">
  import { defineEmits } from 'vue'
  import Button from './Button.vue'

  const emit = defineEmits<{
    goToMenu: []
  }>()

  function handleGoToMenu() {
    emit('goToMenu')
  }
</script>

<template>
  <section id="resources">
    <div class="resources-text">
      <h2>Resources</h2>

      <section class="category">
        <h3>UK Hotlines & Reporting Centres</h3>
        <section class="resource">
          <h4>NSPCC (National Society for the Prevention of Cruelty to Children)</h4>
          <p>Helpline: 0808 800 5000 (for adults worried about a child)</p>
          <p>Childline (for children & teens): 0800 1111 | <a target="_blank" href="www.childline.org.uk">www.childline.org.uk</a></p>
          <p>Report abuse: <a target="_blank" href="www.nspcc.org.uk">www.nspcc.org.uk</a></p>
        </section>

        <section class="resource">
          <h4>CEOP (Child Exploitation and Online Protection Command – UK Police Unit)</h4>
          <p>Report grooming & online abuse: <a target="_blank" href="www.ceop.police.uk">www.ceop.police.uk</a></p>
        </section>

        <section class="resource">
          <h4>The Lucy Faithfull Foundation (Stop It Now!)</h4>
          <p>Helpline: 0808 100 0900</p>
          <p>Help for victims & families: <a target="_blank" href="www.stopitnow.org.uk">www.stopitnow.org.uk</a></p>
        </section>

        <section class="resource">
          <h4>Internet Watch Foundation (IWF) – Report Online Child Abuse</h4>
          <p>Report sexual images/videos of minors: <a target="_blank" href="www.iwf.org.uk">www.iwf.org.uk</a></p>
        </section>

        <section class="resource">
          <h4>Thinkuknow (UK Education Initiative by CEOP)</h4>
          <p>Advice for young people, parents & professionals: <a target="_blank" href="www.thinkuknow.co.uk">www.thinkuknow.co.uk</a></p>
        </section>
      </section>

      <section class="category">
        <h3>Global Hotlines & Reporting Centers</h3>
        <section class="resource">
          <h4>INHOPE – International Network of Hotlines</h4>
          <p>Find a hotline in your country: <a target="_blank" href="www.inhope.org">www.inhope.org</a></p>
        </section>

        <section class="resource">
          <h4>Child Helpline International </h4>
          <p>Find a local helpline in over 140 countries: <a target="_blank" href="www.childhelplineinternational.org">www.childhelplineinternational.org</a></p>
        </section>

        <section class="resource">
          <h4>ECPAT (End Child Prostitution and Trafficking)</h4>
          <p>Global organization fighting child exploitation: <a target="_blank" href="www.ecpat.org">www.ecpat.org</a></p>
        </section>

        <section class="resource">
          <h4>WeProtect Global Alliance</h4>
          <p>International coalition against online child abuse: <a target="_blank" href="www.weprotect.org">www.weprotect.org</a></p>
        </section>
      </section>

      <section class="category">
        <h3>Additional Support & Advice</h3>
        <section class="resource">
          <h4>Parents Protect</h4>
          <p>For parents concerned about grooming risks: <a target="_blank" href="www.parentsprotect.co.uk">www.parentsprotect.co.uk</a></p>
        </section>

        <section class="resource">
          <h4>Psychological & Trauma Support</h4>
          <p>Mind (Mental Health Charity UK): 0300 123 3393 | <a target="_blank" href="www.mind.org.uk">www.mind.org.uk</a></p>
          <p>Text Shout to 85258 (24/7)</p>
        </section>
        
        <p>If there is need for urgent help, <b>contact local emergency services immediately (999 in the UK, 911 in the US, 112 in the EU).</b></p>
      </section>
    </div>
    <Button color="primary" @click="handleGoToMenu">Go to the menu</Button>
  </section>
</template>

<style lang="scss" scoped>
#resources {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;

  .category {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    h4 {
      margin: 0;
    }

    .resource {
      margin-bottom: 2rem;

      p {
        margin: 0;
      }
    }
  }
}
</style>