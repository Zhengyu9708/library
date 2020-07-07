let gulp = require('gulp')
let del = require('del')
let concat = require('gulp-concat')
let fs = require('fs')

// 清除原有的appiview样式
gulp.task('clean', (cb) => {
  fs.access('./src/assets/css/iview/appiview.scss', (err) => {
    if (!err) {
      del.sync(['./src/assets/css/iview/appiview.scss']) // 同步删除 不然会导致合并异常
      cb()
    } else {
      cb()
    }
  })
})

// 生成新的appiview样式
gulp.task('iview', ['clean'], () => { // 先执行clean 在执行iview  不添加[clean] 将会并行运行导致合并异常
  return gulp.src('./src/assets/css/iview/*.scss')
    .pipe(concat('appiview.scss'))
    .pipe(gulp.dest('./src/assets/css/iview'))
})

// 任务流
gulp.task('default', ['clean', 'iview'])
