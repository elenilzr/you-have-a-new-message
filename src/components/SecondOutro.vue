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
  <section id="second-outro">
    <div class="second-outro-text">
      <p>There is no evidence to suggest that online abuse victims suffer less than offline abuse victims. Victims may develop psychological issues such as anxiety, depression and post-traumatic stress.</p>
      <p>Research shows online grooming victims can experience emotional distress, guilt, shame, and feelings of confusion, as well as loss of self-esteem, confidence, and trust in others.</p>
      <p>These effects often lead to withdrawal from loved ones and feelings of isolation due to shame and fear of not being believed or met with other negative unhelpful reactions from family and friends.</p>
      <p>(Whittle et al., 2013)</p>

      <p>The International Watch Foundation (IWF) (a technology-led child protection organisation) assessed 375,230 reports in 2022, where 255,588 reports were confirmed to contain child sexual abuse imagery. 199,363 of those reports contained self-generated images and videos made and/or shared from a smartphone or a webcam. This is often a result of a child being groomed by someone online.</p>
      <p>(IWF, 2022)</p>

      <p>Offenders can be split into either contact offenders or fantasy offenders. Contact offenders are in direct, physical contact with minors, while fantasy offenders engage with the minor strictly online, involving no direct physical interaction. Grooming can lead to the offender coercing or encouraging the minor to either meet in person or to send sexually explicit content online.</p>
      <p>(Chiu et al., 2018)</p>

      <p>According to the 2022 reports, IWF found that around 58% of the online sexual exploitation cases involve victims aged 11 to 13, highlighting that this age group is particularly vulnerable. However, there has been an alarming increase in victims aged 7 to 10, up 60% from 2020.</p>
      <p>(IWF, 2022)</p>

      <p>The National Society for the Prevention of Cruelty to Children (NSPCC) reported an alarming increase in incidents, where in the UK, online grooming crimes have risen by 89% over the last six years, with over 7,000 offences reported in 2023/24 alone.</p>
      <p>(NSPCC, 2024)</p>

      <p>There is a high percentage of underreporting when it comes to online sexual exploitation. Many victims do not report grooming due to fear, shame, or not recognising it as abuse. For instance, in England and Wales, only 56% of children aged 13 to 15 who received sexual messages told someone about it at the time.</p>
      <p>(Office for National Statistics, 2020)</p>
    </div>
    <Button color="primary" @click="handleGoToMenu">Go to the menu</Button>
  </section>
</template>

<style lang="scss" scoped>
#second-outro {
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