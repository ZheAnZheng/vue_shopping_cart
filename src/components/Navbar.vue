<template>
  <nav>
    <ul class="nav-bar">
      <li v-for="item in items" :key="item.id">
        <a href="#">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      items: [
        {
          id: uuidv4(),
          name: "男款",
        },
        {
          id: uuidv4(),
          name: "女款",
        },
        {
          id: uuidv4(),
          name: "最新消息",
        },
        {
          id: uuidv4(),
          name: "客製商品",
        },
        {
          id: uuidv4(),
          name: "聯絡我們",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--primary-bg-color);
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}
.nav-bar {
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 1rem 0;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  li {
    flex: 1;
  }
  a {
    color: var(--primary-text-color);
  }
}

@media screen and (min-width: 550px) {
  nav {
    grid-area: nav;
    width: 100%;
    opacity: 1;
    overflow-x: scroll;
    transform: none;
    transition: none;
    .nav-bar {
      all: unset;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      column-gap: 0.5rem;
      li {
        font-size: 15px;
        white-space: nowrap;
      }
    }
    &::-webkit-scrollbar {
      height: 0;
    }
  }
}
@media (min-width: 1112px) {
  nav {
    overflow-x: unset;

    .nav-bar {
      column-gap: 2rem;
      li {
        font-size: 1rem;
      }
    }
  }
}
</style>
