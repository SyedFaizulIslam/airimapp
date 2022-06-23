
<template>
<v-app>
  <div style="padding:20px;">
    <v-toolbar style="margin-bottom:20px;">
      <v-row align="center">
        <v-col cols="3" style="">
          <v-toolbar-title style="float:left;">Airim</v-toolbar-title>
        </v-col>
        <v-col cols="9" style="padding:0px;">
          <v-tabs centered>
              <v-tab><a class="custom-menu-tab" href="#/"><v-icon>mdi-calendar-check</v-icon>Home</a> </v-tab>
              <v-tab><a class="custom-menu-tab" href="#/AirimNlp"><v-icon>mdi-microsoft-excel</v-icon>NLP Example</a></v-tab>
              <v-tab><a class="custom-menu-tab" href="#/AirimDeepLearning"><v-icon>mdi-alert</v-icon>DeepLearning Example</a></v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-toolbar>
    <router-view />
  </div>
</v-app>
</template>

<script>
export default {
}
</script>