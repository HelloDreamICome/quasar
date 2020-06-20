<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input
        dense
        label="From"
        v-model="dateFrom"
        @focus="() => dateRangeInputFocus = 'start'"
        style="max-width: 125px"
      />
      <q-input
        dense
        label="To"
        v-model="dateTo"
        @focus="() => dateRangeInputFocus = 'end'"
        style="max-width: 125px"
      />
    </div>
    <q-date
      ref="qDateRangeStart"
      v-model="dateRange"
      range
      :edit-range="
        dateRangeInputFocus !== null
          ? dateRangeInputFocus
          : dateRangeFocus !== null
            ? dateRangeFocus
            : 'start'
      "
      default-range-view="start"
      :max-year-month="rangeMaxYearMonth"
      flat
      minimal
      @mock-range-end="date => {
        $refs.qDateRangeEnd.setMockRangeEnd(date)
        dateRangeFocus =
          dateRangeInputFocus !== null
            ? dateRangeInputFocus
            : 'start'
      }"
      @input="dateRangeInputFocus = null"
      @calendar-change="ym =>
        rangeMinYearMonth =
          (ym.year + (ym.month === 12 ? 1 : 0)) +
          '/' +
          (ym.month === 12 ? '01' : (ym.month < 9 ? '0' : '') + (ym.month + 1))
      "
    />
    <q-date
      ref="qDateRangeEnd"
      v-model="dateRange"
      range
      :edit-range="
        dateRangeInputFocus !== null
          ? dateRangeInputFocus
          : dateRangeFocus !== null
            ? dateRangeFocus
            : 'end'
      "
      default-range-view="end"
      :min-year-month="rangeMinYearMonth"
      flat
      minimal
      @mock-range-end="date => {
        $refs.qDateRangeStart.setMockRangeEnd(date)
        dateRangeFocus = dateRangeInputFocus !== null
          ? dateRangeInputFocus
          : 'end'
      }"
      @input="dateRangeInputFocus = null"
      @calendar-change="ym =>
        rangeMaxYearMonth =
          (ym.year - (ym.month === 1 ? 1 : 0)) +
          '/' +
          (ym.month === 1 ? 12 : (ym.month < 11 ? '0' : '') + (ym.month - 1))
      "
    />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dateFrom: '2020/05/14',
      dateTo: '2020/07/10',
      dateRangeFocus: null,
      dateRangeInputFocus: null,
      rangeMinYearMonth: next.getFullYear() + '/' + (next.getMonth() < 9 ? '0' : '') + (next.getMonth() + 1),
      rangeMaxYearMonth: today.getFullYear() + '/' + (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1)
    }
  },
  computed: {
    dateRange: {
      get: function () {
        return [[this.dateFrom, this.dateTo]]
      },
      set: function (newValue) {
        this.dateFrom = newValue[0][0]
        this.dateTo = newValue[0][1]
      }
    }
  }
}
</script>
