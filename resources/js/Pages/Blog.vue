<script setup lang="ts"></script>

<template>
  <div class="bg-blue-50">
    <h1>Welcome to the Blog Page!</h1>
    <p>This is where the blog content will be displayed.</p>
    <form>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" />
      <label for="content">Content:</label>
      <textarea id="content" name="content"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
