---
layout: document
title: OSOM Guide
subtitle: Service Lifecycle
---
The service lifecycle defines how services mature from an initial
concept, through to production, and are eventually decommissioned. At
each stage of the lifecycle there can be different general
expectations of performance and reliability, and there are different
activities that need to take place.

## Discovery

In discovery, a service contract has been written that proposes
answering a number of hypothetical user needs, but the goal of the
phase is to understand the problem that needs to be solved and refine
the service contract prior to entering the alpha phase.

In the discovery phase, none of the user needs of the contract are ever met.

For more information, see the GDS documentation on discovery.

## Alpha

When a service is in its alpha phase it is trying to find a solution
to the problem established in the service contract. In the alpha
phase, potential implementations are being tested and validated to
understand the most suitable approach. At the end of the alpha phase
the interface a service presents to the world is considered and
established, which will allow the service contract to be refined prior
to entering the beta phase.

In the alpha phase, it is expected that some of the user needs may be
met some of the time.

For more information, see the GDS documentation on alpha.

## Beta

A service that is in its beta phase is being actively built to a set
of user needs identified in discovery, with the goal of servicing
those needs. In the beta phase, the approach decided upon in the alpha
phase is adopted, and the primary focus is on the implementation and
delivery of the service. This means that preparations are underway to
operate the service as if it were live.

In the beta phase, it is expected that some of the user needs are met,
most of the time.

For more information, see the GDS documentation on beta.

## Live

A live service is one that is actively being used by the users whose
needs it is designed to meet. The service needs to meet its user
needs, its operational goals, and improve itself over time - either by
meeting the needs of its users more effectively or by making the
mechanism by which it meets those needs more efficient. Eventually,
the service will be decommissioned and the service should publish
consideration of how users might migrate away from it.

In the live phase, it is expected that all of the user needs are met
all of the time.

For more information, see the GDS documentation on live.

## Decommissioned

A decommissioned service is one that is no longer operating. The
reasons for its decommissioning should be recorded in its service
contract to ensure that the organisation doesn’t forget lessons that
it may have learned from operating it.

