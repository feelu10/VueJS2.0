<template>
  <div class="app-container">
    <SideNavbar />
    <div class="app-content">
      <div class="app-content-header">
        <form v-for="(form, index) in forms" :key="index">
          <input type="text" placeholder="Equipment Type" />
          <input type="text" placeholder="FullPartial" />
          <input type="text" placeholder="Comments" />
          <input type="text" placeholder="Commodity" />
          <input type="text" placeholder="LengthFeet" />
          <input type="text" placeholder="Origin City" />
          <input type="text" placeholder="Origin State" />
          <input type="text" placeholder="Destination City" />
          <input type="text" placeholder="Destination State" />
          <input type="text" placeholder="Load Offer (USD)" />
          <input type="date" placeholder="Earliest Availability" />
          <input type="date" placeholder="Latest Availability" />
          <input type="text" placeholder="Referecence ID (optional)" />
          <button @click="removeForm(index)">Remove</button>
        </form>
      </div>
    </div>
  </div>
  <button @click="addForm">Add Another Row</button>
</template>

<script>
import SideNavbar from "@/components/SideNavbar.vue";

export default {
  components: {
    SideNavbar,
  },
  data() {
    return {
      forms: [
        {
          equipmentType: "",
          fullPartial: "",
          // Initialize other fields with default values
          referenceId: "",
        },
      ],
    };
  },
  methods: {
    addForm() {
      this.forms.push({
        equipmentType: "",
        fullPartial: "",
        // Initialize other fields with default values
        referenceId: "",
      });
    },
    removeForm(index) {
      this.forms.splice(index, 1);
    },
  },
};
</script>
z

<style lang="scss" scoped>
@import "@/assets/css/admin_dash.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.form-row {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.form-row:hover {
  transform: scale(1.02);
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #007bff;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="date"]:focus {
  border-color: #0056b3;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.remove-button {
  background-color: #dc3545;
}

.add-button {
  margin-top: 20px;
}
</style>
