<template>
  <AddUser v-if="!currentUser" />
  <section class="links" v-else>
    <div class="icons-link" @click="addBack">
      <router-link to="/users">
        <svg
          class="icon-link icon-link--users"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
        >
          <g>
            <path
              d="M55.014,45.389l-9.553-4.776C44.56,40.162,44,39.256,44,38.248v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
		c1.239-1.75,2.232-3.698,2.954-5.799C49.084,27.47,50,26.075,50,24.5v-4c0-0.963-0.36-1.896-1-2.625v-5.319
		c0.056-0.55,0.276-3.824-2.092-6.525C44.854,3.688,41.521,2.5,37,2.5s-7.854,1.188-9.908,3.53
		c-2.368,2.701-2.148,5.976-2.092,6.525v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109
		c0.916,3.627,2.833,6.36,3.503,7.237v3.309c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866c-2.9,1.582-4.701,4.616-4.701,7.92V57.5
		h46v-4.043C60,50.019,58.089,46.927,55.014,45.389z"
            />
            <path
              d="M17.983,44.025l8.921-4.866c0.367-0.201,0.596-0.586,0.596-1.004v-2.814c-0.885-1.232-2.446-3.712-3.337-6.91
		C23.1,27.399,22.5,25.994,22.5,24.5v-4c0-1.124,0.352-2.219,1-3.141v-4.733c-0.034-0.383-0.074-1.269,0.096-2.395
		C22.219,9.751,20.687,9.5,19,9.5c-10.389,0-10.994,8.855-11,9v4.579c-0.648,0.706-1,1.521-1,2.33v3.454
		c0,1.079,0.483,2.085,1.311,2.765c0.825,3.11,2.854,5.46,3.644,6.285v2.743c0,0.787-0.428,1.509-1.171,1.915l-6.653,4.173
		C1.583,48.134,0,50.801,0,53.703V57.5h12.5v-4.238C12.5,49.409,14.601,45.87,17.983,44.025z"
            />
          </g>
        </svg>
      </router-link>
    </div>
    <div class="icons-link" @click="addBack">
      <router-link to="/settings">
        <svg
          class="icon-link icon-link--settings"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm8.99-5L19.415,9c-.008-.022-.036-.107-.046-.129l1.11-1.11a2.011,2.011,0,0,0,0-2.842l-1.4-1.4a2,2,0,0,0-1.421-.588h0a2,2,0,0,0-1.419.588L15.07,4.612,15,4.58V3.009A2.011,2.011,0,0,0,12.99,1H11.01A2.011,2.011,0,0,0,9,3.009L9,4.566l-.086.049-.043.016L7.765,3.522a2,2,0,0,0-1.42-.589h0a2,2,0,0,0-1.421.588l-1.4,1.4a2.011,2.011,0,0,0,0,2.842l1.1,1.143c-.013.029-.033.063-.043.093H3.01A2.011,2.011,0,0,0,1,11.009v1.982A2.011,2.011,0,0,0,3.01,15l1.575,0c.008.022.036.107.046.129l-1.11,1.11a2.011,2.011,0,0,0,0,2.842l1.4,1.4a2.059,2.059,0,0,0,2.842,0l1.115-1.115c.022.011.1.047.121.056v1.571A2.011,2.011,0,0,0,11.01,23h1.98A2.011,2.011,0,0,0,15,20.991l0-1.557.129-.065,1.109,1.109a2.058,2.058,0,0,0,2.843,0l1.4-1.4a2.011,2.011,0,0,0,0-2.842l-1.1-1.143c.013-.029.033-.063.043-.093H20.99A2.011,2.011,0,0,0,23,12.991V11.009A2.011,2.011,0,0,0,20.99,9Zm0,4H19.421a2.1,2.1,0,0,0-1.466,3.54l1.109,1.124-1.414,1.4-1.11-1.109A2.1,2.1,0,0,0,13,19.42L12.99,21,11,20.991V19.42a2.043,2.043,0,0,0-1.307-1.881,2.138,2.138,0,0,0-.816-.164,2,2,0,0,0-1.417.58L6.336,19.064l-1.4-1.414,1.108-1.108A2.1,2.1,0,0,0,4.579,13L3,12.991,3.01,11H4.579A2.1,2.1,0,0,0,6.045,7.46L4.936,6.336l1.414-1.4L7.46,6.045a2.04,2.04,0,0,0,2.227.419l.018-.007A2.04,2.04,0,0,0,11,4.58L11.01,3,13,3.009V4.58a2,2,0,0,0,1.227,1.845c.026.013.057.027.087.039a2.038,2.038,0,0,0,2.226-.419l1.124-1.109,1.4,1.414L17.956,7.458A2.1,2.1,0,0,0,19.421,11H20.99l.01.009Z"
          />
        </svg>
      </router-link>
    </div>
    <div class="icons-link" @click="addBack">
      <router-link
        :to="{
          path: '/userprograms',
          query: {
            showDefault: 'notDefault',
            mode: 'startProgram',
            userID: currentUser.id,
          },
        }"
      >
        <svg
          class="icon-link icon-link--start"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m 2 2.5 v 11 c 0 1.5 1.269531 1.492188 1.269531 1.492188 h 0.128907 c 0.246093 0.003906 0.488281 -0.050782 0.699218 -0.171876 l 9.796875 -5.597656 c 0.433594 -0.242187 0.65625 -0.734375 0.65625 -1.226562 c 0 -0.492188 -0.222656 -0.984375 -0.65625 -1.222656 l -9.796875 -5.597657 c -0.210937 -0.121093 -0.453125 -0.175781 -0.699218 -0.175781 h -0.128907 s -1.269531 0 -1.269531 1.5 z m 0 0"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "src/stores/users.store";
import AddUser from "src/components/Users/AddUser.vue";
import { useSettingsStore } from "src/stores/settings.store";

const rootLinks = [
  { link: "/users", icon: null, title: "Users" },
  { link: "/settings", icon: null, title: "Settings" },
  { link: "{path: '/runner'}", icon: null, title: "Start" },
];

export default defineComponent({
  name: "HomePage",
  components: { AddUser },
  setup() {
    const usersStore = useUsersStore();

    const settingsStore = useSettingsStore();
    const addBackPath = settingsStore.addBackPath;
    const clearBack = settingsStore.clearBack;
    const { users, currentUser } = storeToRefs(usersStore);
    const links = ref(rootLinks);

    function addBack() {
      addBackPath("/");
    }

    onMounted(() => {
      clearBack();
    });

    return { users, links, currentUser, addBack };
  },
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;

  .icons-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: 10px;
    box-shadow: 0 0 20px #25abd9;
    border: 2px solid var(--primary);
    border-radius: 50%;
    width: 25%;

    &:active {
      box-shadow: 0 0 20px 5px #25abd9;
    }

    .icon-link {
      stroke: var(--primary);
      stroke-width: 1;
      fill: transparent;
      width: 100%;
      box-shadow: 0 0 10px var(--primary);
    }

    .icon-link--users {
      stroke-width: 2;
      stroke-dasharray: 0;
      stroke-dashoffset: 0;
      animation: usersAnim 8s linear infinite;
    }
    .icon-link--settings {
      stroke-dasharray: 95;
      stroke-dashoffset: 0;
      animation: settingsAnim 8s linear infinite;
      // animation-delay: 10s;
    }
    .icon-link--start {
      stroke-dasharray: 45;
      stroke-dashoffset: 0;
      animation: startAnim 8s linear infinite;
      // animation-delay: 20s;
    }
  }

  @keyframes usersAnim {
    0% {
      stroke-dasharray: 0;
      // box-shadow: 0 0 10px var(--primary);
    }
    30% {
      stroke-dasharray: 200;
      fill: transparent;
      // box-shadow: 0 0 10px var(--primary);
    }
    40% {
      fill: var(--primary);
      box-shadow: 0 0 10px var(--primary);
    }
    41% {
      stroke-dasharray: 330;
      fill: transparent;
      box-shadow: 0 0 7px 12px var(--primary);
    }
    50% {
      box-shadow: 0 0 10px var(--primary);
    }
    100% {
      stroke-dasharray: 330;
      fill: transparent;
    }
  }
  @keyframes settingsAnim {
    0% {
      stroke-dasharray: 0;
    }
    30% {
      stroke-dasharray: 95;
      fill: transparent;
    }
    40% {
      fill: var(--primary);
      box-shadow: 0 0 10px var(--primary);
    }
    41% {
      stroke-dasharray: 330;
      fill: transparent;
      box-shadow: 0 0 7px 12px var(--primary);
    }
    50% {
      box-shadow: 0 0 10px var(--primary);
    }
    80% {
      stroke-dasharray: 190;
      fill: transparent;
    }
    100% {
      stroke-dasharray: 190;
      fill: transparent;
    }
  }
  @keyframes startAnim {
    0% {
      stroke-dasharray: 0;
    }
    30% {
      stroke-dasharray: 45;
      fill: transparent;
    }
    40% {
      fill: var(--primary);
      box-shadow: 0 0 10px var(--primary);
    }
    41% {
      stroke-dasharray: 330;
      fill: transparent;
      box-shadow: 0 0 7px 12px var(--primary);
    }
    50% {
      box-shadow: 0 0 10px var(--primary);
    }
    80% {
      stroke-dasharray: 90;
      fill: transparent;
    }
    100% {
      stroke-dasharray: 90;
    }
  }
}
</style>
