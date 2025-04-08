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
  <section id="references">
    <div class="references-text">
      <h2>References</h2>
      <p>
        Broome, L. J., Izura, C. & Lorenzo-Dus, N. (2018). A systematic review of fantasy driven vs. 
        Contact driven internet-initiated sexual offences: Discrete or overlapping typologies? 
        <i>Child Abuse & Neglect, 79.</i> 434-444. <a href="https://doi.org/10.1016/j.chiabu.2018.02.021">https://doi.org/10.1016/j.chiabu.2018.02.021</a> 
      </p>

      <p>
        Chiu, M. M., Seigfried-Spellar, K. C. & Ringenberg, T. R. (2018). Exploring detection of 
        contact vs. fantasy online sexual offenders in chats with minors: Statistical discourse analysis of self-disclosure and emotion words. <i>Child Abuse & Neglect, 81</i>. 128-138. <a href="https://doi.org/10.1016/j.chiabu.2018.04.004">https://doi.org/10.1016/j.chiabu.2018.04.004</a> 
      </p>

      <p>
        Gámez-Guadix, M., Almendros, C., Clavete, E. & De Santisteban, P. (2017). Persuasion 
        strategies and sexual solicitations and interactions in online sexual grooming of 
        adolescents: Modeling direct and indirect pathways. <i>Journal of Adolescence, 63</i>(1). 
        11-18. <a href="https://doi.org/10.1016/j.adolescence.2017.12.002">https://doi.org/10.1016/j.adolescence.2017.12.002</a>
      </p>

      <p>
        IWF(2022). <i>The Annual Report 2022: #BehindTheScreens</i>. Internet Watch Foundation (IWF) Annual Report 2022. <a href="https://www.iwf.org.uk/about-us/who-we-are/annual-report-2022/">https://www.iwf.org.uk/about-us/who-we-are/annual-report-2022/</a> 
      </p>

      <p>
        Ioannou, M., Synnott, J., Reynolds, A. & Pearson, J. (2018). A comparison of online and 
        offline Grooming characteristics: An application of the victim roles model. 
        <i>Computers in Human Behavior, 85.</i> 291-297. 
        <a href="https://doi.org/10.1016/j.chb.2018.04.011">https://doi.org/10.1016/j.chb.2018.04.011</a> 
      </p>

      <p>
        Lewis, L. (2020). Experiences in Online Grooming from Initial Contact with Offender to 
        Relationship Ending. <i>Walden Dissertation and Doctoral Studies, Walden University</i>.
      </p>

      <p>
        Lorenzo-Dus, N. & Izura, C. (2017). "Cause ur special": Understanding trust and 
        complimenting behaviour in online grooming discourse. <i>Journal of Pragmatics, 112</i>. 
        68-82. <a href="https://doi.org/10.1016/j.pragma.2017.01.004">https://doi.org/10.1016/j.pragma.2017.01.004</a>
      </p>

      <p>
        National Society for the Prevention of Cruelty to Children. (2024, January 1). <i>Online 
        grooming crimes against children increase by 89% in six years</i>. NSPCC. Retrieved 
        March 26, 2025, from 
        <a href="https://racetothemoon.nspcc.org.uk/about-us/news-opinion/2024/online-grooming-crimes-increase/">https://racetothemoon.nspcc.org.uk/about-us/news-opinion/2024/online-grooming-crimes-increase/</a> 
      </p>

      <p>
        National Society for the Prevention of Cruelty to Children. <i>Grooming: recognising the signs | 
        NSPCC Learning</i>. (n.d.). NSPCC Learning. 
        <a href="https://learning.nspcc.org.uk/safeguarding-child-protection/grooming#article-top">https://learning.nspcc.org.uk/safeguarding-child-protection/grooming#article-top</a> 
      </p>

      <p>
        Office for National Statistics. (2024, March 21). <i>Children's online behaviour in England and 
        Wales: Latest findings</i>. Office for National Statistics. 
        <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/bulletins/childrensonlinebehaviourinenglandandwales/latest">https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/bulletins/childrensonlinebehaviourinenglandandwales/latest</a>
      </p>

      <p>
        Whittle, H. C., Hamilton-Giachritsis, C., & Beech, A. R. (2013). Victims' voices: The impact 
        of online grooming and sexual abuse. <i>Universal Journal of Psychology, 1</i>(2), 59-71. 10.13189/ujp.2013.010206 
      </p>

      <p>
        Writtle, H. C., Hamilton-Giachritsis, C., Beech, A. R. & Collins, G. (2013). A review of 
        online grooming: Characteristics and concerns. <i>Aggression and Violent Behavior, 
        18</i>(1). 62-70. <a href="https://doi.org/10.1016j.avb.2012.09.003">https://doi.org/10.1016j.avb.2012.09.003</a> 
      </p>
    </div>
    <Button color="primary" @click="handleGoToMenu">Go to the menu</Button>
  </section>
</template>

<style lang="scss" scoped>
#references {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;

  p {
    overflow-wrap: break-word;
  }
}
</style>