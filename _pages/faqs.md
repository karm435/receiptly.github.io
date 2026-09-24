---
layout: legal
title: Frequently asked questions
permalink: /faqs/
include_in_header: true
eyebrow: Receiptly help
description: Answers about scanning receipts, Gmail import, iCloud sync, exports, subscriptions, and privacy in Receiptly for iPhone, iPad, and Android.
updated: 2026-09-24
excerpt_separator: ""
---

{% for faq in site.data.faqs %}
## {{ faq.question }} {#{{ faq.id }}}

{{ faq.answer }}
{% endfor %}
