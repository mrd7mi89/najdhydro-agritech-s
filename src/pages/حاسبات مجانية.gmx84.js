// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    // <!DOCTYPE html>
    <html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>حاسبة جاذبية الاستثمار في الزراعة بدون تربة</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- رأس الصفحة -->
  <header>
    <h1>حاسبة جاذبية الاستثمار</h1>
  </header>

  <!-- نموذج إدخال البيانات -->
  <main>
    <form id="investment-form">
      <h2>أدخل بيانات المشروع</h2>
      
      <!-- حجم الأرض بالمتر المربع -->
      <label for="land-size">حجم الأرض (متر مربع):</label>
      <input type="number" id="land-size" required>

      <!-- حجم الصالات المحمية -->
      <label for="greenhouse-size">حجم الصالات المحمية (متر مربع):</label>
      <input type="number" id="greenhouse-size" required>

      <!-- نوع المحصول -->
      <label for="crop-type">نوع المحصول:</label>
      <input type="text" id="crop-type" required>

      <!-- توفر الخدمات (الكهرباء) -->
      <p>توفر الخدمات (الكهرباء):</p>
      <label><input type="radio" name="electricity-availability" value="yes" checked> نعم</label>
      <label><input type="radio" name="electricity-availability" value="no"> لا</label>

      <!-- مصدر الكهرباء (يظهر إذا تم اختيار لا) -->
      <div id="electricity-source-container" style="display: none;">
        <label for="electricity-source">مصدر الكهرباء:</label>
        <select id="electricity-source">
          <option value="generator">ماكينة كهرباء</option>
          <option value="solar">طاقة شمسية</option>
          <option value="other">آخرى (أكتب تكلفة الكيلو واط)</option>
        </select>

        <!-- إذا تم اختيار آخرى -->
        <div id="electricity-cost-container" style="display: none;">
          <label for="electricity-cost">تكلفة الكيلو واط ($):</label>
          <input type="number" id="electricity-cost">
        </div>
      </div>

      <!-- مصدر الماء -->
      <label for="water-source">مصدر الماء:</label>
      <select id="water-source" required>
        <option value="company">شركة المياه</option>
        <option value="well">بئر ماء</option>
        <option value="transport">شاحنات نقل ماء</option>
      </select>

      <!-- قياس الppm في الماء (اختياري) -->
      <label for="water-ppm">قياس الppm في الماء (اختياري):</label>
      <input type="number" id="water-ppm">

      <!-- نوع الصالات المحمية -->
      <label for="greenhouse-type">نوع الصالات المحمية:</label>
      <select id="greenhouse-type" required>
        <option value="glass">زجاجية</option>
        <option value="polycarbonate">ألواح بولي كاربونيت</option>
        <option value="plastic">بلاستيك</option>
      </select>

      <!-- زر احسب -->
      <button type="button" id="calculate-btn">احسب</button>
    </form>
  </main>

  <!-- قسم النتائج -->
  <section id="results" style="display: none;">
    <h2>نتائج الحساب</h2>
    <p id="establishment-cost"></p>
    <p id="annual-operational-cost"></p>
    <p id="annual-expected-returns"></p>
    <p id="annual-return-growth-rate"></p>
    <p id="risk-analysis"></p>
    <p id="recommendations"></p>
    <!-- زر تنزيل التقرير -->
    <button id="download-report">تنزيل التقرير</button>
  </section>

  <!-- تذييل الصفحة -->
  <footer>
    <p>&copy; 2023 حاسبة جاذبية الاستثمار</p>
  </footer>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
    Write your Javascript code here using the Velo framework API

    // Print hello world:
    // console.log("Hello world!");

    // Call functions on page elements, e.g.:
    // $w("#button1").label = "Click me!";

    // Click "Run", or Preview your site, to execute your code

});