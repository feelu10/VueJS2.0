<template>
  <div class="horizontal-div">
    <div class="list">
      <h1 style="font-size: 25px; color: white">Features</h1>
      <ul class="features-list">
        <a href="/dashboard" style="text-decoration: none">
          <li><i class="fas fa-eye"></i> View DAT</li>
        </a>
        <a href="/dashboard_truckstop" style="text-decoration: none">
          <li><i class="fas fa-eye"></i> View TRUCKSTOP</li>
        </a>
        <a href="/dashboard/post-shipment" style="text-decoration: none">
          <li><i class="fas fa-truck"></i> Single Shipment</li>
        </a>
        <a href="/dashboard/post-bulk" style="text-decoration: none">
          <li><i class="fas fa-boxes"></i> Multiple Shipments</li>
        </a>
        <a href="/dashboard/post-lists" style="text-decoration: none">
          <li><i class="fas fa-list"></i> View All Transactions</li>
        </a>
        <a href="/dashboard/tracking" style="text-decoration: none"
          ><li><i class="fas fa-map-marker-alt"></i> Truckers Tracking</li></a
        >
        <!-- <li class="disabled-feature"><i class="fas fa-map-marker-alt"></i> View Truckers via GPS (Under Development)</li> -->
      </ul>
      <hr />
      <!-- <div class="column-toggle">
            <label>Show/Hide Columns:</label>
            <br>
            <div class="column-toggle">
                <input type="checkbox" id="column-1" checked> Load Owner<br>
                <input type="checkbox" id="column-2" checked> LOAD ID #<br>
                <input type="checkbox" id="column-3" checked> MVAS #<br>
                <input type="checkbox" id="column-4" checked> PTMX #<br>
                <input type="checkbox" id="column-5" checked> Rate $USD<br>
                <input type="checkbox" id="column-6" checked> Origin City<br>
                <input type="checkbox" id="column-7" checked> Origin State<br>
                <input type="checkbox" id="column-8" checked> Destination City<br>
                <input type="checkbox" id="column-9" checked> Destination State<br>
                <input type="checkbox" id="column-10" checked> Comment<br>
                <input type="checkbox" id="column-11" checked> Equipment Type<br>
                <input type="checkbox" id="column-12" checked> Contact<br>
                <input type="checkbox" id="column-13" checked> Pickup Start<br>
                <input type="checkbox" id="column-14" checked> Pickup End<br>
            </div>
        </div> -->
      <div
        style="
          display: inline-flex;
          margin-top: 16rem;
          text-align: center;
          justify-content: center;
          align-items: center;
        "
      >
        <h1 style="margin: 0 1rem">X</h1>
      </div>
    </div>
  </div>
  <div class="centered-div">
    <div id="selectedRowCountDiv" style="display: none"></div>

    <div class="grid-row">
      <div class="grid-item">
        <table
          style="border-collapse: collapse; border: 1px solid #ccc"
          id="data-table"
          class="resizable-table"
        >
          <thead id="sortable-header">
            <tr>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                <button id="deleteButton">
                  Delete<br />
                  <input
                    type="text"
                    id="filter-input-4"
                    oninput="filterTable(4)"
                    placeholder="Filter"
                    style="display: none"
                  />
                </button>
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Load Owner<br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th
                style="border: 1px solid #ccc; padding: 1px 5px; display: none"
              >
                LOAD ID #<br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                MVAS # <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                PTMX # <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Rate $USD <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                <i data-sort="asc" class="clickable">↓</i> Orig City <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Orig State <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Dest City <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Dest State <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Tarp <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Equip Type <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                Contact <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px">
                PU Start <br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th style="border: 1px solid #ccc; padding: 1px 5px" id="ends">
                PU End<br />
                <input
                  type="text"
                  id="filter-input-4"
                  oninput="filterTable(4)"
                  placeholder="Filter"
                  style="width: 120px"
                />
              </th>
              <th
                style="
                  border: 1px solid #ccc;
                  padding: 1px 5px;
                  text-align: center;
                "
              >
                Options
              </th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "../../css/dashboard.css";

export default {
  name: "MiddleContainer",
};
</script>
