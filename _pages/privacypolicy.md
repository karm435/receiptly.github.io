---
layout: page
title: Privacy Policy
include_in_header: true
---

**Last updated**  
7 September 2026

# Privacy Policy

Receiptly does not create an account for you and does not sell your receipt content. Receipt photos, OCR text, merchants, amounts, categories, tags, and expenses stay on your device first.

What happens next depends on the platform and the features you turn on:

- **iPhone and iPad:** if iCloud is enabled for Receiptly, Apple can copy that data between your Apple devices through your Apple Account.
- **Android:** receipts stay on that device. There is no iCloud sync, and the Android library does not sync with iPhone.
- **Either platform:** if you turn on Smart Scan, a reduced copy of a receipt image can be sent to Google AI servers for advanced scanning.

The rest of this page covers those paths and the other optional services. Receipt content is not used to build an advertising profile of you.

## 1.0 Information We Collect

Scanning and storage happen on the device first. A few optional features send limited, app-level information to the services named below.

### 1.2 Information you provide to us

Photos you take and details you type are stored locally.

On iOS, if iCloud is enabled for the app, that data syncs through your personal Apple Account. Delete the app to remove the local copy. Manage iCloud copies in iOS Settings.

On Android, uninstalling the app or deleting a receipt removes the local copy. Android Auto Backup is not used for the receipt library.

Support email you send is used only to reply.

## 2.0 Purchases

- **iOS:** purchases go through the App Store.
- **Android:** purchases go through Google Play.

Receiptly uses RevenueCat to check subscription status so paid features become available. RevenueCat does not receive your receipt images or OCR text.

Paid features are sold as Receiptly Pro on iOS and Receiptly Plus on Android.

## 3.0 How we keep data secure

Data on the device is protected by the device's own encryption.

On iOS, iCloud data is managed through your Apple Account when you enable sync.

On Android, receipt images and the local database stay on the device. There is no iCloud or cross-device Receiptly account.

## 4.0 Receipt scanning

Optical character recognition starts on your device.

Smart Scan is optional and stays off until you turn it on. It is a Receiptly Pro feature on iOS and a Receiptly Plus feature on Android. Scanning starts on your device. If a receipt needs extra help, a reduced copy of the image (JPEG, maximum 2048-pixel long edge) can be sent to Google AI servers for advanced scanning. That path uses Firebase AI Logic and Vertex AI when the device is online and Remote Config allows it. The original image stays local. Turn Smart Scan off to keep scanning on-device.

Firebase Analytics records basic product usage events. Firebase Crashlytics records crash diagnostics. App Check protects those requests. Remote Config can turn the Smart Scan path on or off. Analytics and Crashlytics must not receive receipt images, OCR text, merchant names, amounts, filenames, receipt identifiers, search queries, expense titles, addresses, phone numbers, emails, or generated model output.

Receiptly does not use an advertising identifier on Android and does not show ads.

## 5.0 Third-party services

### Kickstart Exchange (iOS only)

On iPhone and iPad, free users may see Kickstart Exchange banners that recommend other independent apps. Receiptly Pro subscribers do not see these banners. Kickstart Exchange is not used on Android.

Kickstart Exchange matches apps, not people. It does not track users or devices, and it does not build advertising profiles. The SDK may send app-level details such as the bundle identifier, platform, app and build versions, SDK version, and App Store country so it can show apps that can actually be installed. In shipping builds it may also send an Apple-signed App Transaction to confirm a real install. Kickstart Exchange processes that signed data only long enough to verify the app, then discards it. Impression and click counts are recorded per app, not per person. Ad artwork is delivered by Kickstart Exchange through Cloudflare.

Kickstart Exchange does not receive your receipts. Receiptly does not use Kickstart Exchange to identify you.

Read the [Kickstart Exchange privacy notice](https://exchange.kickstart.tools/privacy).

### Other services

- Apple iCloud / CloudKit for optional sync on iOS
- The App Store or Google Play for purchases, depending on the platform
- RevenueCat for subscription status
- Firebase (Analytics, Crashlytics, App Check, Remote Config, and the optional Smart Scan path above)

## 6.0 Deletion

There is no Receiptly cloud account to request. Delete a receipt in the app, or uninstall the app, to remove the local library. On iOS, also manage any iCloud copies in iOS Settings if you enabled sync.

## 7.0 Contact

If you have questions about this Privacy Policy, use the protected support link on the Receiptly website or the in-app Contact Support option.
