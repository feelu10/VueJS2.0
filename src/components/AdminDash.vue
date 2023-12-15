<template>
  <div class="app-container">
    <SideNavbar />
    <div class="app-content">
      <div class="app-content-header">
        <h1 class="app-content-headerText">Admin</h1>
        <button class="mode-switch" title="Switch Theme">
          <svg
            class="moon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </button>
      </div>
      <div class="app-content-actions">
        <input class="search-bar" placeholder="Search..." type="text" />
        <div class="app-content-actions-wrapper">
          <div class="filter-button-wrapper">
            <button class="action-button filter jsFilter">
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-filter"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </button>
            <div class="filter-menu">
              <label>Category</label>
              <select>
                <option>All Categories</option>
                <option>Furniture</option>
                <option>Decoration</option>
                <option>Kitchen</option>
                <option>Bathroom</option>
              </select>
              <label>Status</label>
              <select>
                <option>All Status</option>
                <option>Active</option>
                <option>Disabled</option>
              </select>
              <div class="filter-menu-buttons">
                <button class="filter-button reset">Reset</button>
                <button class="filter-button apply">Apply</button>
              </div>
            </div>
          </div>
          <button class="action-button list active" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button class="action-button grid" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="products-area-wrapper tableView">
        <div class="products-header">
          <div class="product-cell">Reference #</div>
          <div class="product-cell">Load OFFER(USD)</div>
          <div class="product-cell">Origin City</div>
          <div class="product-cell">Origin State</div>
          <div class="product-cell">Destination City</div>
          <div class="product-cell">Destination Prov</div>
          <div class="product-cell">Comment</div>
          <div class="product-cell">Equipment-Type</div>
          <div class="product-cell">Earliest Availability</div>
          <div class="product-cell">Latest Availability</div>
          <div class="product-cell"></div>
          <div class="product-cell">Actions</div>
          <div class="product-cell"></div>
        </div>
      </div>
      <div class="products-area-wrapper tableView">
        <div
          class="products-header"
          v-for="data in deletedData"
          :key="data.referenceId"
        >
          <div class="product-cell">{{ data.referenceId }}</div>
          <div class="product-cell">{{ data.loadBoard }}</div>
          <div class="product-cell">{{ data.originCity }}</div>
          <div class="product-cell">{{ data.originState }}</div>
          <div class="product-cell">{{ data.destinationCity }}</div>
          <div class="product-cell">{{ data.destinationState }}</div>
          <div class="product-cell">{{ data.comments }}</div>
          <div class="product-cell">{{ data.EquipmentType }}</div>
          <div class="product-cell">{{ data.dateStart }}</div>
          <div class="product-cell">{{ data.dateEnd }}</div>
          <div class="product-cell"></div>
          <div class="product-cell">
            <i class="fas fa-trash" @click="deleteItem(data.referenceId)"></i>
          </div>
          <div class="product-cell">
            <i class="fas fa-edit" @click="openEditModal(data)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit modal -->
  <div v-if="showEditModal" class="edit-modal">
    <div class="edit-modal-content">
      <span class="close" @click="closeEditModal">&times;</span>
      <h2>EDIT FORM</h2>
      <form>
        <div style="display: inline-flex">
          <div class="form-group">
            <label for="referenceId">Reference #</label>
            <input
              type="text"
              id="referenceId"
              v-model="editedData.referenceId"
            />
          </div>
          <div class="form-group">
            <label for="loadBoard">Load OFFER(USD)</label>
            <input type="text" id="loadBoard" v-model="editedData.loadBoard" />
          </div>
          <div class="form-group">
            <label for="originCity">Origin City</label>
            <input
              type="text"
              id="originCity"
              v-model="editedData.originCity"
            />
          </div>
          <div class="form-group">
            <label for="originState">Origin State</label>
            <input
              type="text"
              id="originState"
              v-model="editedData.originState"
            />
          </div>
        </div>
        <div style="display: inline-flex">
          <div class="form-group">
            <label for="destinationCity">Destination City</label>
            <input
              type="text"
              id="destinationCity"
              v-model="editedData.destinationCity"
            />
          </div>
          <div class="form-group">
            <label for="destinationState">Destination Prov</label>
            <input
              type="text"
              id="destinationState"
              v-model="editedData.destinationState"
            />
          </div>
          <div class="form-group">
            <label for="comments">Comment</label>
            <input type="text" id="comments" v-model="editedData.comments" />
          </div>
        </div>
        <div style="display: inline-flex">
          <div class="form-group">
            <label for="equipmentType">Equipment-Type</label>
            <input
              type="text"
              id="equipmentType"
              v-model="editedData.EquipmentType"
            />
          </div>
          <div class="form-group">
            <label for="dateStart">Earliest Availability</label>
            <input type="text" id="dateStart" v-model="editedData.dateStart" />
          </div>
          <div class="form-group">
            <label for="dateEnd">Latest Availability</label>
            <input type="text" id="dateEnd" v-model="editedData.dateEnd" />
          </div>
        </div>
        <button @click="saveEditedData">Save</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/admin_dash.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Center the modal vertically and horizontally */
.edit-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.edit-modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 120px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
<script>
import adminDash from "@/assets/js/admin_dash.js";
import SideNavbar from "@/components/SideNavbar.vue";
import Swal from "sweetalert2";

export default {
  components: {
    SideNavbar,
  },
  data() {
    return {
      localDeletedData: [],
      showEditModal: false,
      editedData: {},
    };
  },
  props: {
    deletedData: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    adminDash();
    this.localDeletedData = [...this.deletedData];
  },
  methods: {
    openEditModal(data) {
      this.showEditModal = true;
      this.editedData = { ...data };
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    saveEditedData() {
      this.showEditModal = false;
      Swal.fire("Success", "Data updated!", "success");
    },
    async deleteItem(referenceId) {
      console.log("Attempting to delete item with referenceId:", referenceId);

      const url = `https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/deleteForm/${referenceId}`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Password: "2023",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        console.log("Response received:", response);

        if (!response.ok) {
          throw new Error("Server responded with an error: " + response.status);
        }

        const data = await response.json();
        console.log("Data received:", data);

        if (data.success) {
          this.localDeletedData = this.localDeletedData.filter(
            (item) => item.referenceId !== referenceId
          );
          console.log("Item successfully deleted:", referenceId);
        } else {
          console.error("Error deleting item:", data.error);
        }
      } catch (error) {
        console.error("Error deleting item:", error.message);
      }
    },
  },
};
</script>
