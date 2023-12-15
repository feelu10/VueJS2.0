<template>
  <div class="app-container">
    <SideNavbar />
    <div class="app-content">
      <div class="app-content-header"></div>
      <div>
        <form class="row g-3" @submit.prevent="submitForm" ref="form">
          <!-- Shipment Details -->
          <h1>Shipment Details</h1>

          <div class="col-md-6">
            <label for="OriginCity" class="form-label">Origin City</label>
            <input
              type="text"
              v-model="formData.originCity"
              class="form-control"
              id="OriginCity"
            />
          </div>

          <div class="col-md-6">
            <label for="OriginState" class="form-label">Origin State</label>
            <input
              type="text"
              v-model="formData.originState"
              class="form-control"
              id="OriginState"
            />
          </div>

          <div class="col-md-6">
            <label for="DestinationCity" class="form-label"
              >Destination City</label
            >
            <input
              type="text"
              v-model="formData.destinationCity"
              class="form-control"
              id="DestinationCity"
            />
          </div>

          <div class="col-md-6">
            <label for="DestinationState" class="form-label"
              >Destination State</label
            >
            <input
              type="text"
              v-model="formData.destinationState"
              class="form-control"
              id="DestinationState"
            />
          </div>

          <div class="col-md-3">
            <label for="DateStart" class="form-label">Pickup Start</label>
            <input
              type="date"
              v-model="formData.dateStart"
              class="form-control"
              id="DateStart"
            />
          </div>

          <div class="col-md-3">
            <label for="DateEnd" class="form-label">Pickup End</label>
            <input
              type="date"
              v-model="formData.dateEnd"
              class="form-control"
              id="DateEnd"
            />
          </div>

          <div class="col-md-6">
            <label for="loadBoard" class="form-label">LoadBoard Rate</label>
            <input
              type="text"
              v-model="formData.loadBoard"
              class="form-control"
              id="loadBoard"
            />
          </div>

          <!-- Equipment Details -->
          <h1>Equipment Details</h1>
          <div class="col-md-6">
            <div
              style="
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                padding: 0 5rem;
              "
            >
              <div style="flex: 1; min-width: 100px">
                <input
                  type="radio"
                  name="mode"
                  id="full"
                  class="circular-checkbox"
                  v-model="formData.mode"
                  value="FULL"
                />
                <label for="full" class="circular-label">Full</label>
              </div>
              <div style="flex: 1; min-width: 100px">
                <input
                  type="radio"
                  name="mode"
                  id="partial"
                  v-model="formData.mode"
                  class="circular-checkbox"
                  value="PARTIAL"
                />
                <label for="partial" class="circular-label">Partial</label>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div style="flex: 1; min-width: 400px; margin-left: 1rem">
              <select
                id="preferredContact"
                name="preferredContact"
                class="form-control"
                v-model="formData.preferredContact"
              >
                <option value="" disabled selected>Contact-type</option>
                <option value="PRIMARY_PHONE">Phone</option>
                <option value="EMAIL">Email</option>
                <option value="BOTH">Both</option>
              </select>
            </div>
          </div>

          <div class="col-md-6">
            <label for="EquipmentType" class="form-label">Equipment Type</label>
            <input
              type="text"
              v-model="formData.equipmentType"
              class="form-control"
              id="EquipmentType"
            />
          </div>

          <div class="col-md-3">
            <label for="length" class="form-label">Length (FT)</label>
            <input
              type="text"
              v-model="formData.length"
              class="form-control"
              id="length"
            />
          </div>
          <div class="col-md-3">
            <label for="weight" class="form-label">Weight(LBS)</label>
            <input
              type="text"
              v-model="formData.weight"
              class="form-control"
              id="weight"
            />
          </div>
          <div class="col-md-6">
            <label for="floatingTextarea2">Comments</label>
            <div class="form-floating">
              <textarea
                v-model="formData.comments"
                class="form-control"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div style="flex: 1; min-width: 400px; margin-left: 1rem">
              <div style="position: relative">
                <label
                  for="commodity"
                  id="commod"
                  style="font-weight: light; color: #000000"
                  >Commodity</label
                >
                <input
                  type="text"
                  name="commodity"
                  id="commodity"
                  v-model="formData.commodity"
                  class="form-control"
                />
              </div>
              <div style="position: relative">
                <label
                  for="referenceId"
                  id="reference"
                  style="font-weight: light; color: #000000"
                  >Reference ID</label
                >
                <input
                  type="text"
                  id="referenceId"
                  v-model="formData.referenceId"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <button
              type="submit"
              class="btn btn-primary"
              style="width: 90%; margin-top: 2rem"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/admin_dash.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>

<script>
import axios from "axios";
import SideNavbar from "@/components/SideNavbar.vue";

export default {
  components: {
    SideNavbar,
  },
  data() {
    return {
      formData: {
        originCity: "",
        originState: "",
        destinationCity: "",
        destinationState: "",
        dateStart: "",
        dateEnd: "",
        loadBoard: "",
        mode: "",
        preferredContact: "",
        EquipmentType: "",
        length: "",
        weight: "",
        comments: "",
        commodity: "",
        referenceId: "",
        username: "",
      },
    };
  },
  created() {
    // Set the username property when the component is created
    this.setUsername();
  },
  methods: {
    async setUsername() {
      // Log the result of getting the username from session storage
      const storedUsername = sessionStorage.getItem("username");
      console.log("Stored Username:", storedUsername);

      // Set the value of the "username" property from session storage
      this.formData.username = storedUsername;
      console.log("Stored Username:", this.formData.username);
    },
    async submitForm() {
      try {
        // Log the formData before sending the request
        await axios.post(
          "https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/submitForm",
          // "http://127.0.0.1:5001/jakebrakelogistics-2e451/us-central1/api/submitForm",
          this.formData,
          {
            headers: {
              password: "2023",
            },
          }
        );

        // Reset the form
        this.$refs.form.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error if needed
      }
    },
  },
};
</script>
