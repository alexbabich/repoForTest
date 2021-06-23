<template>
  <div class="ts-home">
    <div class="ts-drop-wrapper">
      <div class="ts-drop-list1">
        <drop
          class="ts-drop-item item1"
          @drop="function(data, event) { handleDrop(data, 'Fronalebene', event); }"
          ref="Fronalebene"
        ></drop>
        <drop
          class="ts-drop-item item2" 
          @drop="function(data, event) { handleDrop(data, 'Transversalebene', event); }" 
          ref="Transversalebene"
        ></drop>
      </div>
      <div class="ts-drop-list2">
        <drop class="ts-drop-item item1" @drop="function(data, event) { handleDrop(data, 'Longitudinalachse', event); }" ref="Longitudinalachse"></drop>
        <drop class="ts-drop-item item2" @drop="function(data, event) { handleDrop(data, 'Sagittalachse', event); }" ref="Sagittalachse"></drop>
        <drop class="ts-drop-item item3" @drop="function(data, event) { handleDrop(data, 'Horizontalachse', event); }" ref="Horizontalachse"></drop>
        <drop class="ts-drop-item item4" @drop="function(data, event) { handleDrop(data, 'Sagittalebene', event); }" ref="Sagittalebene"></drop>
      </div>
    </div>

    <template v-if="wellDone">
      <div class="ts-well-done">
        !!well done!!
      </div>
    </template>
    <div class="ts-drag-wrapper">
      <drag class="ts-drag-item" :transfer-data="{ draggable1 }" ref="dragFronalebene">{{ draggable1 }}</drag>
      <drag class="ts-drag-item" :transfer-data="{ draggable2 }" ref="dragTransversalebene">{{ draggable2 }}</drag>
      <drag class="ts-drag-item" :transfer-data="{ draggable3 }" ref="dragLongitudinalachse">{{ draggable3 }}</drag>
      <drag class="ts-drag-item" :transfer-data="{ draggable4 }" ref="dragSagittalachse">{{ draggable4 }}</drag>
      <drag class="ts-drag-item" :transfer-data="{ draggable5 }" ref="dragHorizontalachse">{{ draggable5 }}</drag>
      <drag class="ts-drag-item" :transfer-data="{ draggable6 }" ref="dragSagittalebene">{{ draggable6 }}</drag>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      draggable1: "Fronalebene",
      draggable2: "Transversalebene",
      draggable3: "Longitudinalachse",
      draggable4: "Sagittalachse",
      draggable5: "Horizontalachse",
      draggable6: "Sagittalebene",
      wellDone: false,
    };
  },
  methods: {
    handleDrop(data, refName) {
      const element = document.getElementsByClassName("ts-drag-wrapper");
      const draggName = Object.values(data);
      let dragElement = this.$refs[`drag${refName}`].$el;
      let dropElement = this.$refs[refName].$el;
      if (draggName.includes(refName)) {
        dropElement.innerHTML = refName;
        dragElement.remove();
      }

      if (!element[0]?.hasChildNodes()) {
        this.wellDone = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// ts - is mean test, that is just short class prefix for to avoid conflicts

.ts-home {
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 80vh;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.ts-well-done {
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  filter: brightness(100%);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.ts-drag-wrapper {
  display: flex;
  flex-direction: column;

  .ts-drag-item {
    border: 2px solid rgb(120, 92, 168);
    background-color: rgba(120, 92, 168, 0.2);
    height: 40px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 150%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}

.ts-drop-wrapper {
  background-image: url("../assets/images/image.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  width: 450px;
  display: flex;

  .ts-drop-list1,
  .ts-drop-list2 {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .ts-drop-item {
      width: 173px;
      height: 40px;
      border: 2px solid gray;
      border-radius: 5px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  }

  .ts-drop-list1 {
    .ts-drop-item {
      &.item1 {
        left: 17px;
        top: 23px;
      }

      &.item2 {
        left: 73px;
        bottom: 6px;
      }
    }
  }

  .ts-drop-list2 {
    .ts-drop-item {
      &.item1,
      &.item2,
      &.item3,
      &.item4 {
        left: -3px;
      }

      &.item1 {
        top: 23px;
      }

      &.item2 {
        top: -44px;
      }

      &.item3 {
        top: -37px;
      }

      &.item4 {
        bottom: 112px;
      }
    }
  }
}
</style>
