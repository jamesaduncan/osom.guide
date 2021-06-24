---
layout: document
subtitle: Correction of Errors

---
The Correction of Error (CoE) process was inspired by the [AWS](https://wa.aws.amazon.com/wat.concept.coe.en.html) Well-Architected framework and acts as a [systematic method of learning](/doctrine#do-we-use-systematic-mechanisms-of-learning) for the organisation's service network.

## The CoE document

A Correction of Error (CoE) document should be published by the [Service Manager](/services/#service-managers) for the service to which it applies. A CoE document should be published whenever a problem occurs - it shouldn't be necessary for the problem to have impacted the users of the service.

The CoE document should contain:

* What the problem was
* What the impact of the problem was
* What the root cause of the problem was
* Data that supports the root cause analysis
* What value tradeoffs were made that led to the problem
* The value tradeoffs that need to be avoided in the future
* Lessons that were learned
* Corrective actions that have been, or will be taken

## The Correction of Errors review

The [executive](/executive) should [conduct regular reviews](/executive#review-correction-of-error-documents) with all service managers of the unreviewed, published CoE documents. This review allows other service managers to benefit from the experience of the error, without being a part of the service team that experienced the error.