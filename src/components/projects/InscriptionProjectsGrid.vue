<script setup>
import { ref, computed, onMounted } from 'vue';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './DwqProjectSingle.vue';
import projectsData from '../../data/inscProjects';

// Data
const projects = ref(projectsData);
const projectsHeading = ref('铭文 板块');
const selectedCategory = ref('');
const searchProject = ref('');

// Computed
const filteredProjects = computed(() => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return projects.value;
});

// Methods
function filterProjectsByCategory() {
  return projects.value.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedCategory.value);
  });
}

function filterProjectsBySearch() {
  let project = new RegExp(searchProject.value, 'i');
  return projects.value.filter((el) => el.title.match(project));
}

onMounted(() => {
  feather.replace();
});
</script>


<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
<!--				铭文入门学习、监控 以及工具使用、赚钱-->
			</h3>
<!--			<div-->
<!--				class="-->
<!--					flex-->
<!--					justify-between-->
<!--					border-b border-primary-light-->
<!--					dark:border-secondary-dark-->
<!--					pb-3-->
<!--					gap-2-->
<!--				"-->
<!--			>-->
<!--				<div class="flex justify-between gap-2">-->
<!--					<span-->
<!--						class="-->
<!--							hidden-->
<!--							sm:block-->
<!--							bg-primary-light-->
<!--							dark:bg-ternary-dark-->
<!--							p-2.5-->
<!--							shadow-sm-->
<!--							rounded-xl-->
<!--							cursor-pointer-->
<!--							"-->
<!--					>-->
<!--						<i-->
<!--							data-feather="search"-->
<!--							class="text-ternary-dark dark:text-ternary-light"-->
<!--						></i>-->
<!--					</span>-->
<!--					<input-->
<!--						v-model="searchProject"-->
<!--						class="font-general-medium-->
<!--						pl-3-->
<!--						pr-1-->
<!--						sm:px-4-->
<!--						py-2-->
<!--						border-1 border-gray-200-->
<!--						dark:border-secondary-dark-->
<!--						rounded-lg-->
<!--						text-sm-->
<!--						sm:text-md-->
<!--						bg-secondary-light-->
<!--						dark:bg-ternary-dark-->
<!--						text-primary-dark-->
<!--						dark:text-ternary-light-->
<!--						"-->
<!--						id="name"-->
<!--						name="name"-->
<!--						type="search"-->
<!--						required=""-->
<!--						placeholder="Search Projects"-->
<!--						aria-label="Name"-->
<!--					/>-->
<!--				</div>-->
<!--				<ProjectsFilter @filter="selectedCategory = $event" />-->
<!--			</div>-->
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
