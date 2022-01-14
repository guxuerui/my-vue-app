<template>
  <div>
    <!-- 新增todo -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      v-focus-directive
      placeholder="新增今日代办"
      autocomplete="off"
      class="mt-6 pl-2 input"
    />

    <!-- todo列表 -->
    <ul v-if="todos.length">
      <li 
        v-for="todo in todos"
        :key="todo.id"
        class="mt-2 list" 
        :class="{completed: todo.completed, editing: todo === editedTodo}"
      >
        <!-- 绑定完成状态 -->
        <div class="view">
          <input class="input-checkbox mr-2" type="checkbox" v-model="todo.completed">
          <label class="input-label" @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <button class="del" @click="remoteTodo(todo)">X</button>
        </div>
        <input
          type="text"
          class="pl-2 input edit"
          v-model="todo.title"
          v-todo-directive
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        />
        <!-- 编辑代办 -->
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { reactive, toRefs } from 'vue';

  // 自定义获取焦点指令
  const vFocusDirective = {
    mounted: (el) => {
      el.focus();
    }
  }
  const vTodoDirective = {
    updated: (el) => {
      el.focus();
    }
  }

  const state = reactive({
    newTodo: '',
    todos: [],
    beforeEditCache: '', // 缓存编辑前的title
    editedTodo: null // 正在编辑的todo
  });

  const addTodo = () => {
    console.log('add');
    state.todos.push({
      id: state.todos.length + 1,
      title: state.newTodo,
      completed: false
    });
    state.newTodo = '';
  }
  const remoteTodo = (todo) => {
    state.todos.splice(state.todos.indexOf(todo), 1);
  }

  const editTodo = (todo) => {
    state.beforeEditCache = todo.title;
    state.editedTodo = todo;
  }
  const cancelEdit = (todo) => {
    console.log('esc');
    todo.title = state.beforeEditCache;
    state.editedTodo = null;
  }
  const doneEdit = (todo) => {
    console.log('done');
    state.editedTodo = null;
  }

  const { newTodo, todos, beforeEditCache, editedTodo } = toRefs(state);
</script>

<style scoped>
  .input {
    border: 1px solid #000;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
  }
  .input-checkbox {
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .input-label {
    font-size: 1.2rem;
  }
  .del {
    margin-left: 10px;
    background: cadetblue;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 10px;
  }
  .del:hover {
    transform: scale(1.2);
    transition: all linear 0.2s;
  }
  .completed label {
    text-decoration: line-through;
    color: #ccc;
  }
  .edit,
  .editing .view {
    display: none;
  }
  .view,
  .editing .edit {
    display: block;
  }
  ul {
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 10px;
    margin-top: 20px;
  }
  ul li {
    border-bottom: 1px solid #000;
    padding-bottom: 15px;
  }
  ul li:last-child {
    border: none;
    padding-bottom: 5px;
  }
  .list {
    text-align: left;
    position: relative;
  }
</style>