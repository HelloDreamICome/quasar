<template>
  <div class="q-layout-padding" :class="dark ? 'bg-black text-white' : null">
    <div class="q-gutter-y-md">
      <div class="text-h6">
        Desk Range: {{ dateRange }}
      </div>
      <div class="q-gutter-md">
        <q-input :dark="dark" dense label="From" v-model="dateFrom" @focus="() => dateRangeInputFocus = 'start'" style="max-width: 200px" />
        <q-input :dark="dark" dense label="To" v-model="dateTo" @focus="() => dateRangeInputFocus = 'end'" style="max-width: 200px" />
        <q-date
          ref="qDateRangeStart"
          v-model="dateRange"
          range
          :edit-range="dateRangeInputFocus !== null ? dateRangeInputFocus : dateRangeFocus !== null ? dateRangeFocus : 'start'"
          default-range-view="start"
          :max-year-month="rangeMaxYearMonth"
          flat
          minimal
          @mock-range-end="date => {$refs.qDateRangeEnd.setMockRangeEnd(date); dateRangeFocus = dateRangeInputFocus !== null ? dateRangeInputFocus : 'start'}"
          @input="dateRangeInputFocus = null"
          @calendar-change="ym => rangeMinYearMonth = (ym.year + (ym.month === 12 ? 1 : 0)) + '/' + (ym.month === 12 ? '01' : pad(ym.month + 1))"
        />
        <q-date
          ref="qDateRangeEnd"
          v-model="dateRange"
          range
          :edit-range="dateRangeInputFocus !== null ? dateRangeInputFocus : dateRangeFocus !== null ? dateRangeFocus : 'end'"
          default-range-view="end"
          :min-year-month="rangeMinYearMonth"
          flat
          minimal
          @mock-range-end="date => {$refs.qDateRangeStart.setMockRangeEnd(date); dateRangeFocus = dateRangeInputFocus !== null ? dateRangeInputFocus : 'end'}"
          @input="dateRangeInputFocus = null"
          @calendar-change="ym => rangeMaxYearMonth = (ym.year - (ym.month === 1 ? 1 : 0)) + '/' + (ym.month === 1 ? 12 : pad(ym.month - 1))"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { pad } from '../../../../src/utils/format.js'

export default {
  data () {
    let today = new Date(), next = new Date(today.getFullYear(), today.getMonth() + 1, 1)
    return {
      dark: null,
      dateRange: null,
      dateFrom: null,
      dateTo: null,
      dateRangeFocus: null,
      dateRangeInputFocus: null,
      rangeMinYearMonth: next.getFullYear() + '/' + pad(next.getMonth() + 1),
      rangeMaxYearMonth: today.getFullYear() + '/' + pad(today.getMonth() + 1),
    }
  },

  watch: {
    dateRange (val) {
      if (Array.isArray(val) && val.length === 1 && Array.isArray(val[0])) {
        this.dateFrom = val[0][0]
        this.dateTo = val[0][1]
      }
    }
  },
  methods: {
    inputLog (value, reason, date) {
      console.log('@input', value, reason, date)
    },
    pad
  }
}
</script>
