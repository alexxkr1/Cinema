<template>
  <Dropdown
    v-model="language"
    :options="languages"
    optionLabel="name"
    placeholder="Vali filmi keel"
    class="w-full md:w-14rem mb-1"
  />

  <div class="movies">
    <Card v-for="movie in movies" style="overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://media.cnn.com/api/v1/images/stellar/prod/211227135008-02-the-batman-trailer.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
        />
      </template>
      <template #title>{{ movie.movie.title }}</template>
      <template #subtitle
        >{{ movie.startTime }} | {{ movie.date }} | {{ movie.language }} <br />
        <hr />
        Toimub saalis: {{ movie.hall.name }} | Kohtasi:
        {{ movie.hall.seatsNumber }}
      </template>
      <template #content>
        <p class="m-0">
          Film zanr on {{ movie.movie.genre }} ja vanuse piirang on
          {{ movie.movie.ageLimit }} ning kestab {{ movie.movie.duration }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <RouterLink :to="movie.id"
            ><Button label="Info" outlined class="w-full"
          /></RouterLink>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useMoviesQuery } from "@/queries/movie.queries";
import { computed, ref } from "vue";

const languages = ref([
  { name: "Eesti", code: "ee" },
  { name: "English", code: "en" },
]);

const language = ref("");
const startDate = ref("");
const startTime = ref("");

const params = computed(() => ({
  language: language.value.name,
  startDate: startDate.value,
  startTime: startTime.value,
}));
const { data: movies } = useMoviesQuery(params);
</script>

<style scoped lang="scss">
.movies {
  display: flex;
  gap: 16px;
}
</style>
