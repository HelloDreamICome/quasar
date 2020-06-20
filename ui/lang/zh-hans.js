export default {
  isoName: 'zh-hans',
  nativeName: '中文(简体)',
  label: {
    clear: '清空',
    ok: '确定',
    cancel: '取消',
    close: '关闭',
    set: '设置',
    select: '选择',
    reset: '重置',
    remove: '移除',
    update: '更新',
    create: '创建',
    search: '搜索',
    filter: '过滤',
    refresh: '刷新'
  },
  date: {
    days: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    daysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    headerTitle: function (date) {
      return new Intl.DateTimeFormat('zh-hans', {
        weekday: 'short', month: 'short', day: 'numeric'
      }).format(date)
    },
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    singleDay: '天',
    pluralDay: '天'
  },
  table: {
    noData: '没有可用数据',
    noResults: '找不到匹配的数据',
    loading: '正在加载...',
    selectedRecords: function (rows) {
      return '已选择' + rows + '行'
    },
    recordsPerPage: '每页的行数:',
    allRows: '全部',
    pagination: function (start, end, total) {
      return start + '-' + end + ' / ' + total
    },
    columns: '列'
  },
  editor: {
    url: 'URL',
    bold: '粗体',
    italic: '斜体',
    strikethrough: '删除线',
    underline: '下划线',
    unorderedList: '无序列表',
    orderedList: '有序列表',
    subscript: '下标',
    superscript: '上标',
    hyperlink: '超链接',
    toggleFullscreen: '全屏切换',
    quote: '引号',
    left: '左对齐',
    center: '居中对齐',
    right: '右对齐',
    justify: '两端对齐',
    print: '打印',
    outdent: '减少缩进',
    indent: '增加缩进',
    removeFormat: '清除样式',
    formatting: '格式化',
    fontSize: '字体大小',
    align: '对齐',
    hr: '插入水平线',
    undo: '撤消',
    redo: '重做',
    heading1: '标题一',
    heading2: '标题二',
    heading3: '标题三',
    heading4: '标题四',
    heading5: '标题五',
    heading6: '标题六',
    paragraph: '段落',
    code: '代码',
    size1: '非常小',
    size2: '比较小',
    size3: '正常',
    size4: '中等偏大',
    size5: '大',
    size6: '非常大',
    size7: '超级大',
    defaultFont: '默认字体',
    viewSource: '查看资料'
  },
  tree: {
    noNodes: '没有可用节点',
    noResults: '找不到匹配的节点'
  }
}
