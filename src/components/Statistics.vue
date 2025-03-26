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
  <section id="statistics">
    <div class="statistics-text">
      <h2>Statistics</h2>
      <section>
        <h3>Prevalence:</h3>
        <p>
          The International Watch Foundation (IWF) (a technology-led child protection organisation) assessed 375,230 reports in 2022, where 255,588 reports were confirmed to contain child sexual abuse imagery. 199,363 of those reports contained self-generated images and videos made and/or shared from a smartphone or a webcam. This is often a result of a child being groomed by someone online.<br /><span>(IWF, 2022)</span>
        </p>
        <p>
          Offenders can be split into either contact offenders or fantasy offenders. Contact offenders are in direct, physical contact with minors, while fantasy offenders engage with the minor strictly online, involving no direct physical interaction. Grooming can lead to the offender coercing or encouraging the minor to either meet in person or to send sexually explicit content online.<br /><span>(Chiu et al., 2018)</span>
        </p>
        <p>
          According to the 2022 reports, IWF found that around 58% of the online sexual exploitation cases involve victims aged 11 to 13, highlighting that this age group is particularly vulnerable. However, there has been an alarming increase in victims aged 7 to 10, up 60% from 2020.<br /><span>(IWF, 2022)</span>
        </p>
        <p>
          The National Society for the Prevention of Cruelty to Children (NSPCC) reported an alarming increase in incidents, where in the UK, online grooming crimes have risen by 89% over the last six years, with over 7,000 offences reported in 2023/24 alone.<br /><span>(NSPCC, 2024)</span>
        </p>
        <p>
          There is a high percentage of underreporting when it comes to online sexual exploitation. Many victims do not report grooming due to fear, shame, or not recognising it as abuse. For instance, in England and Wales, only 56% of children aged 13 to 15 who received sexual messages told someone about it at the time.<br /><span>(Office for National Statistics, 2020)</span>
        </p>
      </section>

      <section>
        <h3>Impact on victims:</h3>
        <p>
          Studies have shown no evidence to suggest that online abuse victims suffer less than offline abuse victims.
        </p>
        <p>
          Research show that victims of online grooming often experience emotional distress, including the feelings of confusion, guilt, and shame, as well as psychological issues such as anxiety, depression, and post-traumatic stress.
        </p>
        <p>
          The research also show that victims may experience a significant loss of self-esteem and confidence as well as develop trust issues, both in terms of their relationship with the abuser and with others in their life.
        </p>
        <p>
          Many victims feel socially isolated or withdrawn from their families and peers due to feelings of shame or fear of not being believed. Being met with negative or unhelpful reactions from family members may worsen the emotional toll, especially if there are underlying vulnerabilities.
        </p>
        <p>
          Some victims may engage in self-destructive behaviors like self-harm, substance abuse, or risk-taking behaviors as a way to cope with the emotional toll of the abuse. This can make them even more vulnerable for further harm. 
        </p>
        <p>
          Online grooming can also have a long-term impact on the victims in terms of showing difficulties forming healthy relationships and functioning effectively in their adulthood. 
        </p>
        <p>
          This study has also underlined the importance of interventions to help victims. The victims shared that the experience with professionals is fundamental in contributing to lessen the negative impact of online grooming and sexual abuse.<br /><span>(Whittle et al., 2013)</span>
        </p>
      </section>
    </div>
    <Button color="primary" @click="handleGoToMenu">Go to the menu</Button>
  </section>
</template>

<style lang="scss" scoped>
#statistics {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;
  
  section {
    p {
      margin: 0;
      margin-bottom: 2rem;
  
      span {
        margin-top: 1rem;
        display: block;
        text-align: right;
        font-style: italic;
      }
    }
  }
}
</style>