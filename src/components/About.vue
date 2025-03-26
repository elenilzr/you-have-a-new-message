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
  <section id="about">
    <div class="about-text">
      <h2>About</h2>
      <p>"You have a new message" was created as a tool to educate children, their carers, and professionals, in recognising potentially endangering conversations with strangers online. Online spaces are areas where everybody can find community, interact as anonymously or authentically as they desire, and create bonds with people across the world. This can be a wonderful and rewarding experience, but not one without its own vulnerabilities.</p>
      <p>One of the most rapidly increasing risks of internet use is exposure to online grooming for children and adolescents alike. The aim for this tool is not to discourage openness to friendship with peers, but to raise awareness of conversational ‘red flags’ that are frequently techniques used by online grooming perpetrators, and the intentions behind them. Under the same scope, this tool can encourage parental involvement in maintaining children’s online safety, and provide accessible information about what to look out for when monitoring new interactions of their child. Professionals may also find this tool useful in the context of childcare-dedicated roles as it can be included as part of internet safety presentations.</p>
      <p>Online grooming has had lasting traumatic effects over numerous survivors; inclusive of persistent low self-esteem, depression, anxiety, isolation, feelings of guilt and self-blame. It is a very harrowing experience to have as a young individual, and these effects can last a lifetime without appropriate support and community awareness. This is why it is also vital to have a larger variety of preventative programmes, especially ones that are more impactful for children’s understanding.</p>
      <p>This educational tool is an interactive simulation of a chat, where the user is placed in the position of an adolescent responding to an initial direct message by an unknown person. The user is able to choose between a couple of responses to interact in the simulation, which leads them to differing conversation paths.  As each conversation progresses, the communication received by the unknown person should start to raise questions of concern about the intent of the stranger. The user then has the opportunity for another try at the simulation, only this time, they will receive information about the likely intention of the messages they receive, and what to clearly look out for when they themselves interact with strangers online. This will help them pay attention to things they may have missed the first time around, and highlight the importance of practicing more vigilance throughout conversing.</p>
      <p>The dialogue choices are not meant to divulge into sexual or heavily uncomfortable topics, which are known intentions of online grooming perpetrators. With that in mind, it is important to note that most online grooming conversations often start with a period of building of rapport, trust, and sensitivity before disclosing romantic and sexual interest. That would neither be appropriate to display in this short simulation, nor heavily realistic of the pacing of the typical relationship formation stage.</p>
      <p>The conclusion of this simulation will direct the user to various resources for help and support, as well as further reading and statistics about the prevalence of online grooming. You can find this information and more in "Resources" and "Statistics".</p>
      <p><b>Disclaimer</b><br />This website was created as part of a group project for PSY4223 Trauma Impact and Interventions module (Middlesex University). It may be a helpful resource but should not currently be used for any other purpose or intention other than the viewing and marking by Middlesex University faculty.</p>
    </div>
    <Button color="primary" @click="handleGoToMenu">Go to the menu</Button>
  </section>
</template>

<style lang="scss" scoped>
#about {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>