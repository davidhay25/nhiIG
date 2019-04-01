# {{ page.title }}


## Introduction
This implementation guide is provided to describe the FHIR interface being developed 
to provide access to the New Zealand NHI (National Health Identifier).

This document is a working specification that is expected to be implemented and tested by FHIR<sup>&reg;&copy;</sup> system producers
to enable feedback to improve the content of this guide.

There's more detail on the NHI on the <a href="https://www.health.govt.nz/our-work/health-identity/national-health-index" target="_blank">Ministry Of Health website</a>


The sole resource that is profiled for this guide is the Patient resource.

Concurrently with this work is the development of a 'core' Patient resource 
for New Zealand that will be intended for more general use (such as supporting
the exchange of clinical data between systems). The profiles defined in this
guide will be compatible with the core profiles, specifically:

* Where there is the same concept between the core Patient and the NHI patient profiles that is represented by an extension, then the same extension definition will be used. For example ethnicity.
* In most cases, ValueSets in core will be the same as those used in the NHI profile
* If an element is removed from core, it will not be present in the NHI profile. (But the NHI profile may remove elements from core)
* The core profile will describe 'must support' elements. The intention is that the NHI prpfile will apply 'must support' to the same elements


## Scope

This document presents New Zealand use concepts defined via FHIR processable artefacts; these are collaborative outputs with agreed approaches to varied kinds of healthcare related information based on the core FHIR STU3 specification. 
* [Profiles](profiles.html) - are useful constraints of core FHIR resources and datatype for New Zealand use. IN this guide, it is only the Patient
* [Extensions](extensions.html) - are FHIR extensions that are added for local use, covering needed New Zealand concepts
* [Terminologies](terminology.html) - are defined or referenced code systems and value sets for New Zealand context


## Usage

This document is a working specification that may be directly implemented by FHIR<sup>&reg;&copy;</sup> system producers.

Information contained in this document is aimed at accessing the NHI system

-- more detail on the interface --

## Security

-- details on security here

FHIR<sup>&reg;&copy;</sup> connectathon events are key to the verification of the guide as being suitable for 
implementation. This implementation guide will be used as the basis for New Zealand connectathon events.













