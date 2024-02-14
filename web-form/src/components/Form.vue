<template>
  <section>
    <form @submit="handleSubmit">
      <div>
        <label>Email:</label>
        <input type="email"  v-model="email" />
      </div>

      <div>
        <label>Password:</label>
        <input type="password"  v-model="password" />
      </div>

      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Wev Dev</option>
        <option value="designer">Wev Designer</option>
      </select>
      <div>
        <label for="">Insert Skill Here</label>
        <input type="text" name="skill" v-model="skill" @keyup.enter="addSkill">
      </div>
      <div v-for="skill in skills" :key="skill">
        <p @click="deleteSkill">{{skill}}</p>
      </div>
      <div class="terms">
        <label for="">Accept Terms and Conditions</label>
        <input type="checkbox" required v-model="terms">
      </div>
      <div class="names">
        <input type="checkbox" value="mario" v-model="names">
        <input type="checkbox" value="dougie" v-model="names">
        <input type="checkbox" value="merlin" v-model="names">
      </div>
      <button type="submit">Submit</button>
    </form>
    <div>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Role: {{ role }}</p>
      <p>Terms: {{ terms }}</p>
      <p>Names: {{ names }}</p>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Form',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      names: [],
      skill: '',
      skills: []
    }
  },
  methods: {
    addSkill(e){
      this.skills.push(e.target.value);
      this.skill = ''
    },
    deleteSkill(e){
      const deletedSkill = e.target.outerText;
      this.skills = this.skills.filter((item) => item !== deletedSkill)
    },
    handleSubmit(e){
      e.preventDefault()
      console.log('handle submit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
