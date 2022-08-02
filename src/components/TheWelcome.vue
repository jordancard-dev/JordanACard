<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { JordanHelper } from '@/lib/helpers/jordan.helpers'
import dayjs from 'dayjs';
const skills = await JordanHelper.getSkills();
const experience = await JordanHelper.getExperience();
const education = await JordanHelper.getEducation();
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Skills</template>
  <ul class="skills">
      <li v-for="({name},index) in skills" :key="index">
        {{name}}
      </li>
    </ul>
  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>

    <ul>
      <li v-for="({companyName,startDate,endDate,position,location, tasksPerformed},index) in experience" :key="index">
        <h2>{{companyName}} - {{position}}</h2> {{dayjs(startDate).format("MMM YYYY")}} - {{(endDate) ? dayjs(endDate).format("MMM YYYY") : "Present"}}
        <h3>{{location}}</h3>
        <p>
          <ul>
            <li v-for="(task, index) in tasksPerformed" :key="index">
              {{task}}
            </li>
          </ul>
        </p>
      </li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Education</template>

    <h2>{{education.schoolName}} - {{education.degree}}</h2> {{education.startDate}} - {{education.endDate}}
    <h3>{{education.location}}</h3>
  </WelcomeItem>

</template>

<style scoped>
h2 {
  color: var(--jordan-green)
}
.skills{ 
  color: var(--jordan-vivid-yellow);
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

ul{
  list-style: none;
}
</style>

