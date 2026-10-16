import type { CapacitorConfig } from '@capacitor/cli'

// ---------------------------------------------------------------------------
// پیکربندی Capacitor برای ساخت نسخه اندروید
// ⚠️ اگر شناسه یکتا دارید (مثل ir.yourname.esmfamil) appId را تغییر دهید —
//    این همان شناسه‌ای است که هنگام انتشار در مایکت ثبت می‌کنید.
// ---------------------------------------------------------------------------

const config: CapacitorConfig = {
  appId: 'ir.esmfamil.objects',
  appName: 'اسم‌فامیل اشیاء',
  webDir: 'out',
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  server: {
    androidScheme: 'https',
  },
}

export default config
