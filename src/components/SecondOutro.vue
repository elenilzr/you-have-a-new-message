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
      <p>There is no evidence to suggest that online abuse victims suffer less than offline abuse victims. Victims may develop psychological issues such as <b>anxiety, depression and post-traumatic stress.</b></p>
      <p>Research shows online grooming victims can experience <b>emotional distress, guilt, shame, and feelings of confusion, as well as loss of self-esteem, confidence, and trust in others.</b></p>
      <p>These effects often lead to <b>withdrawal</b> from loved ones and <b>feelings of isolation</b> due to <b>shame</b> and <b>fear</b> of not being believed or met with other negative unhelpful <b>reactions from family and friends.</b></p>
      <p>(Whittle et al., 2013)</p>

      <p><b>IWF</b> found 255,588 reports confirmed to contain child sexual abuse imagery in 2022. <b>199,363 of those reports contained self-generated images and videos</b> shared from a smartphone or a webcam. This is often <b>a result of a child being groomed</b> by someone online.</p>
      <p>(IWF, 2022)</p>

      <p>Offenders can either be <b>contact offenders or fantasy offenders</b>. Contact offenders are in <b>direct, physical contact with minors</b>, while fantasy offenders <b>engage with the minors strictly online</b>. Grooming can lead to the offender coercing the minor to either meet in person or send sexually explicit content online.</p>
      <p>(Chiu et al., 2018)</p>

      <p>According to the 2022 reports, <b>IWF</b> found that around <b>58% of the online sexual exploitation cases involve victims aged 11 to 13</b>, highlighting that this age group is particularly vulnerable. However, there has been an <b>alarming increase in victims aged 7 to 10</b>, up 60% from 2020.</p>
      <p>(IWF, 2022)</p>

      <p><b>NSPCC</b> reported an alarming increase in incidents, where in the UK, <b>online grooming crimes have risen by 89%</b> over the last six years, with over 7,000 offences reported in 2023/24 alone.</p>
      <p>(NSPCC, 2024)</p>

      <p><b>Many victims do not report grooming due to fear, shame, or not recognising it as abuse</b>. For instance, in England and Wales, only 56% of children aged 13 to 15 who received sexual messages reported it.</p>
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