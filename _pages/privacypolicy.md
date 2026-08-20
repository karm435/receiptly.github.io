---
layout: page
title: Privacy Policy
include_in_header: true
canonical_url: /privacy.html
---

**Last updated**  
20 August 2026

# Privacy Policy

Receipt photos, OCR text, merchants, amounts, categories, tags, and expenses stay on your device. If iCloud sync is on, Apple copies that data between your devices through your Apple Account. If you turn on Smart Scans, a copy of a receipt image can be sent to Google AI servers for advanced scanning. The rest of this page covers that path and the other optional services, including Kickstart Exchange.

## 1.0 Information We Collect

Receiptly does not create an account for you and does not sell your receipt content. Scanning and storage happen on the device first.

A few optional features send limited, app-level information to the services named below. Those cases are described here. Receipt content is not used to build an advertising profile of you.

### 1.2 Information you provide to us

Photos you take and details you type are stored locally. If iCloud is enabled for the app, that data syncs through your personal Apple Account. Delete the app to remove the local copy. Manage iCloud copies in iOS Settings.

Support email you send is used only to reply.

## 2.0 Purchases

Purchases go through Apple. Receiptly uses RevenueCat to check subscription status so paid features become available. RevenueCat does not receive your receipt images or OCR text.

## 3.0 How we keep data secure

Data on the device is protected by the device's own encryption. iCloud data is managed through your Apple Account. The app uses Apple's built-in security features, including secure iCloud synchronization when you enable it.

## 4.0 Receipt scanning

Optical character recognition starts on your device.

Smart Scans are a Premium option and stay off until you turn them on in App Setup. Scanning starts on your device. If a receipt needs extra help, a reduced copy of the image (JPEG, maximum 2048-pixel long edge) can be sent to Google AI servers for advanced scanning. That path uses Firebase AI Logic and Vertex AI when the device is online and Remote Config allows it. The original image stays local. Turn Smart Scans off to keep scanning on-device.

Firebase Analytics records basic product usage events. Firebase Crashlytics records crash diagnostics. App Check protects those requests. Analytics and Crashlytics must not receive receipt images, OCR text, merchant names, amounts, filenames, receipt identifiers, search queries, expense titles, addresses, phone numbers, emails, or generated model output.

## 5.0 Third-party services

### Kickstart Exchange

Free users may see Kickstart Exchange banners that recommend other independent apps. Premium subscribers do not see these banners.

Kickstart Exchange matches apps, not people. It does not track users or devices, and it does not build advertising profiles. The SDK may send app-level details such as the bundle identifier, platform, app and build versions, SDK version, and App Store country so it can show apps that can actually be installed. In shipping builds it may also send an Apple-signed App Transaction to confirm a real install. Kickstart Exchange processes that signed data only long enough to verify the app, then discards it. Impression and click counts are recorded per app, not per person. Ad artwork is delivered by Kickstart Exchange through Cloudflare.

Kickstart Exchange does not receive your receipts. Receiptly does not use Kickstart Exchange to identify you.

Read the [Kickstart Exchange privacy notice](https://exchange.kickstart.tools/privacy).

### Other services

- Apple iCloud / CloudKit for optional sync between your devices
- RevenueCat for in-app purchases
- Firebase (Analytics, Crashlytics, App Check, and the optional Smart Scans path above)

## 6.0 Contact

If you have questions about this Privacy Policy, email [support@receiptsco.app](mailto:support@receiptsco.app).
