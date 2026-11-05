# Humanoid Structural Design System (HSDS)
## Universal Blueprint for High-Precision, Telemetry-Driven Web Architecture

> **Purpose**: A color-agnostic, structural design framework inspired by modern humanoid robotics, aerospace interfaces, and deep-tech platforms (Figure, 1X, Tesla Optimus, Sanctuary AI).  
> **Key Principle**: Form follows mechanics. The scaffolding, coordinates, and data specifications are not decorative—they form the primary visual architecture. This structure can be reskinned with any brand palette without altering the underlying layout bones.

---

## Table of Contents
1. [Core Architectural Philosophy](#1-core-architectural-philosophy)
2. [Color-Agnostic Token Architecture](#2-color-agnostic-token-architecture)
3. [The Chassis Grid & Hairline Scaffolding](#3-the-chassis-grid--hairline-scaffolding)
4. [Universal 9-Stage Page Anatomy](#4-universal-9-stage-page-anatomy)
5. [Component Structural Blueprints](#5-component-structural-blueprints)
6. [Typographic Structural Hierarchy](#6-typographic-structural-hierarchy)
7. [Spatial Cadence & Geometry Physics](#7-spatial-cadence--geometry-physics)
8. [Kinematics & Motion Physics](#8-kinematics--motion-physics)
9. [Multi-Brand Adaptation & Skinning Guide](#9-multi-brand-adaptation--skinning-guide)

---

## 1. Core Architectural Philosophy

### 1.1 The "Exposed Chassis" Paradigm
Traditional web design hides layout structure beneath soft shadows, colored blobs, and floating cards.  
**Humanoid Design does the opposite**: it celebrates the chassis. Structural lines (`1px`), intersection crosshairs (`+`), indexing tags (`01 // ROOT`), and telemetry strips are intentionally revealed to project precision, engineering authority, and functional clarity.

### 1.2 Separation of Structure vs. Skin
- **Structure (Fixed)**: Grid boundaries, aspect-ratio viewports, telemetry rails, hairline borders, corner brackets, and typographic scale.
- **Skin (Interchangeable)**: Color tokens, background luminance (dark/light), typography font families, and accent highlights.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HUMANOID DESIGN ANATOMY                         │
├────────────────────────────────────────────────────────────────────────┤
│  [TOP RAIL: Status Telemetry + System Clock + Breadcrumb Coordinates]  │
├──────────────────────────────────────┬─────────────────────────────────┤
│                                      │  [TELEMETRY HUD / SPECS]        │
│  MONOLITHIC DISPLAY HEADLINE         │  • Real-time metric indicators  │
│  "AUTONOMOUS PHYSICAL INTELLIGENCE"  │  • Spec matrix (4-row stack)    │
│                                      │  • Verification status pill     │
├──────────────────────────────────────┴─────────────────────────────────┤
│  [ASPECT-LOCKED VIEWPORT / CHASSIS STAGE (16:9 or 21:9)]               │
│  Corner registration marks [ ┌ ┐ └ ┘ ] + Focal target reticle (+)      │
├────────────────────────────────────────────────────────────────────────┤
│  [MODULAR BENTO MATRIX: 0px Gap Hairline Border Grid]                  │
│  ┌───────────────────────┬──────────────────────┬───────────────────┐  │
│  │ 01 // KINEMATICS      │ 02 // NEURAL OS      │ 03 // POWER GRID  │  │
│  └───────────────────────┴──────────────────────┴───────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Color-Agnostic Token Architecture

All structural components must consume **semantic tokens**, never raw HEX codes. This guarantees instant reusability across any brand identity.

| Semantic Token | Structural Role | Default Dark Equiv. | Default Light Equiv. |
| :--- | :--- | :--- | :--- |
| `--surface-canvas` | Base viewport foundation | `#000000` / `#090A0C` | `#FFFFFF` / `#F8F9FA` |
| `--surface-panel` | Chassis modules, bento cells | `#111317` | `#FFFFFF` |
| `--surface-elevated` | Floating command docks, modals | `#181B20` | `#F1F3F5` |
| `--border-structural` | 1px grid divider lines, outer chassis | `rgba(255,255,255,0.12)`| `rgba(0,0,0,0.12)` |
| `--border-subtle` | Internal cell dividers, secondary rails| `rgba(255,255,255,0.06)`| `rgba(0,0,0,0.06)` |
| `--border-focus` | Active interactive state outline | `rgba(255,255,255,0.4)` | `rgba(0,0,0,0.4)` |
| `--text-monolithic` | Dominant display titles | `rgba(255,255,255,1.0)` | `rgba(0,0,0,1.0)` |
| `--text-body` | Descriptive copy, editorial layer | `rgba(255,255,255,0.72)`| `rgba(0,0,0,0.72)` |
| `--text-telemetry` | Specs, units, coordinates, indices | `rgba(255,255,255,0.45)`| `rgba(0,0,0,0.45)` |
| `--accent-indicator` | Micro status LEDs, active markers | Brand Accent Color | Brand Accent Color |

---

## 3. The Chassis Grid & Hairline Scaffolding

### 3.1 The 12-Column Unified Scaffolding
- **Container Max-Width**: `1440px` (or `1600px` for wide displays) centered with auto margins.
- **Edge Rails (Gutters)**: `24px` (mobile), `48px` (tablet), `64px` to `80px` (desktop) acting as fixed outer telemetry margins.
- **Internal Column Grid**: 12 columns with **0px gap** when using bordered bento cells, or `16px`/`24px` gap when using decoupled cards.

```
+====================================================================================+
| GUTTER (64px) |  COL 1  |  COL 2  |  ...  |  COL 11 |  COL 12 | GUTTER (64px)      |
| [SYS: RUNNING]| <----------------- CONTENT -----------------> | [COORD: 37.7°N]    |
+====================================================================================+
```

### 3.2 Hairline Border Rules
1. **Never use heavy dropshadows** to define containers. Structure is defined by `1px solid var(--border-structural)`.
2. **Intersection Reticles (`+`)**: Place crosshairs or plus symbols at the 4-way intersection of structural borders.
3. **Corner Registration Marks**: Encase primary feature viewports with L-brackets (`┌ ┐ └ ┘`).

---

## 4. Universal 9-Stage Page Anatomy

Every humanoid/deep-tech website follows this modular structural narrative. It applies to robotics, SaaS platforms, AI agencies, consumer hardware, or enterprise architecture.

```
STAGE 1: Floating Command Dock / Header Telemetry
STAGE 2: Monolithic Genesis Hero & Spec HUD
STAGE 3: Real-Time Specification Matrix (The Spec Sheet)
STAGE 4: Modular Bento Chassis (Capability Architecture)
STAGE 5: Exploded Kinematic Anatomy (Interactive Layer Breakdown)
STAGE 6: Verification & Benchmark Data Ledger
STAGE 7: Deployment Feed / Field Logs
STAGE 8: Deploy Console CTA (Conversion Chassis)
STAGE 9: Global Structural Ledger (Footer)
```

---

### Stage 1: Floating Command Dock & Header Telemetry
A hairline-framed top dock anchored to the viewport top, housing system telemetry and navigation.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| [LOGO // MONO]  |  [01] PLATFORM  [02] SPECS  [03] KINEMATICS  |  SYS: NOMINAL [●] |
|                 |                                              |  [ DEPLOY // ]    |
+------------------------------------------------------------------------------------+
```

#### DOM Hierarchy:
- `header.chassis-nav` (Position: Sticky/Fixed top, 1px bottom border)
  - `div.nav-brand-container` (Left: Monospaced logotype + optional version badge `v4.2`)
  - `nav.nav-links-cluster` (Center: Bracketed index links `[01] FEATURES`, `[02] ARCHITECTURE`)
  - `div.nav-telemetry-cluster` (Right: Pulsing live status indicator + mechanical CTA button)

---

### Stage 2: Monolithic Genesis Hero & Spec HUD
A split-screen or vertical-stack composition where an oversized headline is held in tension by high-density telemetry.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| INDEX: 00 // INITIATION                      TIMESTAMP: 2026.11.04 // UTC+00:00    |
+------------------------------------------------------------------------------------+
|                                              | [SPECIFICATION HUD RAIL]            |
|  MONOLITHIC HERO HEADLINE                    | ─────────────────────────────────── |
|  DESIGNED FOR UNSTRUCTURED                   | METRIC 01: 200 Hz Bandwidth         |
|  PHYSICAL REALITY.                           | METRIC 02: 44 Degrees of Freedom    |
|                                              | METRIC 03: Sub-millimeter Tolerance |
|  [Utilitarian 2-line mission description]    | ─────────────────────────────────── |
|  [ PRIMARY ACTION ]  [ READ SPECS -> ]       | STATUS: PRODUCTION DEPLOYED         |
+----------------------------------------------+-------------------------------------+
| [FULL-BLEED ASYMMETRICAL VIEWPORT STAGE: Aspect 16:9 or 21:9]                      |
| [┌]                                                                             [┐]|
|                         [PRIMARY PRODUCT / SYSTEM ARTIFACT]                        |
|                                                                                    |
| [└]                                                                             [┘]|
| CAPTION: FIG. 01 — FULL CHASSIS INTEGRATION                  COORDINATE: [X:04 Y:12]|
+------------------------------------------------------------------------------------+
```

---

### Stage 3: The Telemetry / Spec Matrix (The Spec Sheet)
A horizontal strip of 3 to 6 border-collapsed metrics cells giving instant factual authority.

#### Structural Wireframe:
```
+------------------+------------------+------------------+------------------+
| 01 // PAYLOAD    | 02 // ACTUATION  | 03 // LATENCY    | 04 // RUNTIME    |
| 25 kg            | 480 Nm           | < 4 ms           | 16 hrs           |
| Continuous load  | Peak torque      | End-to-end loop  | Hot-swappable    |
+------------------+------------------+------------------+------------------+
```

#### Structural Rules:
- **Zero Gap Grid**: Cells share borders (`border-r` and `border-b` using `var(--border-structural)`).
- **Three-Tier Cell Stack**:
  1. Top: Monospaced metadata tag (`01 // LABEL`)
  2. Middle: Monolithic numeric value (`480 Nm`)
  3. Bottom: Micro-explanation / unit qualification (`Peak joint torque`)

---

### Stage 4: Modular Bento Chassis (Capability Architecture)
An asymmetrical 12-column grid organizing product features into structural avionics bays.

#### Structural Wireframe:
```
+------------------------------------------+-----------------------------------------+
| CHASSIS BAY 01 (Col span 7/12)           | CHASSIS BAY 02 (Col span 5/12)          |
| ┌──────────────────────────────────────┐ | ┌─────────────────────────────────────┐ |
| │ TAG: 01 // AUTONOMOUS PERCEPTION     │ | │ TAG: 02 // REAL-TIME KINEMATICS     │ |
| │ Headline: 360° Vision Sensor Array   │ | │ Headline: Micro-Actuator Precision  │ |
| │ Description: Multi-camera spatial... │ | │ Description: Sub-millimeter...      │ |
| │ -----------------------------------  │ | │ ----------------------------------- │ |
| │ [VISUAL / DIAGRAM CONTAINER]         │ | │ [DATA GRAPH / SCHEMATIC CONTAINER] │ |
| └──────────────────────────────────────┘ | └─────────────────────────────────────┘ |
+------------------------------------------+-----------------------------------------+
| CHASSIS BAY 03 (Col span 4/12)           | CHASSIS BAY 04 (Col span 8/12)          |
| ┌──────────────────────────────────────┐ | ┌─────────────────────────────────────┐ |
| │ TAG: 03 // THERMAL EFFICIENCY        │ | │ TAG: 04 // SECURE CONTROL PLANE     │ |
| └──────────────────────────────────────┘ | └─────────────────────────────────────┘ |
+------------------------------------------+-----------------------------------------+
```

#### Anatomical Anatomy of Every Bento Cell:
1. **Module Header**: Index tag (`01 // PERCEPTION`) + Status indicator (`• ACTIVE`).
2. **Editorial Core**: Bold title + utilitarian 2-sentence description.
3. **Artifact Stage**: Interactive diagram, 3D model, code viewport, or technical schematic.
4. **Telemetry Footer**: Bottom chip strip showing raw specs/attributes.

---

### Stage 5: Exploded Kinematic Anatomy (Layer Breakdown)
A sticky two-column layout where the left column anchors a technical schematic/model while the right column scrolls through architectural layers.

#### Structural Wireframe:
```
+---------------------------------------+--------------------------------------------+
| STICKY SCHEMATIC VIEWPORT             | SCROLLING SUBSYSTEM LEDGER                 |
| (Stays pinned during scroll)          |                                            |
|                                       | [LAYER 01 // MECHANICAL SKELETON]          |
|  ┌─────────────────────────────────┐  | Lightweight carbon-composite architecture  |
|  │                                 │  | high strength-to-weight ratio.             |
|  │   [PERSISTENT 3D SCHEMATIC /    │  | SPECS: 1.8m height | 68kg total mass       |
|  │    EXPLODED SYSTEM VIEW]        │  | ------------------------------------------ |
|  │                                 │  | [LAYER 02 // ACTUATION MATRIX]             |
|  │   Active Focal Node:            │  | Custom planetary gear actuators delivering |
|  │   [+] JOINT_ACTUATOR_04         │  | high torque density at low thermal output. |
|  │                                 │  | SPECS: 44 DOF | Brushless DC motors        |
|  └─────────────────────────────────┘  | ------------------------------------------ |
|                                       | [LAYER 03 // EMBEDDED NEURAL STACK]        |
|                                       | On-chassis inference engine running at 10W.|
+---------------------------------------+--------------------------------------------+
```

---

### Stage 6: Verification & Benchmark Data Ledger
A high-density tabular comparison that demonstrates measurable superiority.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| BENCHMARK LEDGER // VALIDATED TEST RESULTS                                         |
+---------------------+-----------------------+---------------------+----------------+
| PARAMETER           | OUR PLATFORM (V2.4)   | LEGACY STANDARDS    | DELTA / GAIN   |
+---------------------+-----------------------+---------------------+----------------+
| Inference Latency   | 2.8 ms                | 14.5 ms             | +5.17x FASTER  |
| Control Loop Rate   | 1,000 Hz              | 250 Hz              | +4.0x SPEED    |
| Power Draw (Idle)   | 42 W                  | 180 W               | -76% EFFICIENT |
| Joint Repeatability | ±0.05 mm              | ±0.40 mm            | 8x TOLERANCE   |
+---------------------+-----------------------+---------------------+----------------+
```

---

### Stage 7: Deployment Feed / Field Logs
A chronological, terminal-inspired activity stream confirming real-world readiness.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| FIELD LOGS // SYSTEM VERIFICATION FEED                                            |
+------------+-------------------------+--------------------------------+------------+
| 2026.11.02 | FACILITY_ALPHA // US-WEST | Multi-unit synchronized patrol | [VERIFIED] |
| 2026.10.28 | ASSEMBLY_PLANT // EU-01   | Heavy payload transfer (24kg)  | [VERIFIED] |
| 2026.10.15 | LAB_ZERO // TOKYO         | Continuous 72-hr stress test   | [COMPLETED]|
+------------+-------------------------+--------------------------------+------------+
```

---

### Stage 8: Deploy Console CTA (Conversion Chassis)
The closing conversion stage is designed as an operator console rather than a generic banner.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| INITIALIZE DEPLOYMENT SEQUENCE                                                     |
|                                                                                    |
| READY TO SCALE UNSTRUCTURED AUTOMATION?                                            |
| Configure enterprise fleet access or request technical documentation.              |
|                                                                                    |
| +-------------------------------------------------------+  +---------------------+ |
| | $ enterprise_inquiry --access=fleet --tier=global     |  | [ EXECUTE // SUBMIT]| |
| +-------------------------------------------------------+  +---------------------+ |
|                                                                                    |
| COMPLIANCE: SOC2 TYPE II | ISO 27001 | HARDWARE SLA: 99.98% AVAILABLE              |
+------------------------------------------------------------------------------------+
```

---

### Stage 9: Global Structural Ledger (Footer)
The footer acts as the master system status and directory ledger.

#### Structural Wireframe:
```
+------------------------------------------------------------------------------------+
| [BRAND LOGO // MONO]                 STATUS: ALL SYSTEMS NOMINAL [●]               |
| GLOBAL COORDINATES: 37°46'N 122°25'W  TIMEZONE: UTC+00:00 [LIVE SYNC]               |
+--------------------+--------------------+--------------------+--------------------+
| ARCHITECTURE       | SPECIFICATIONS     | DOCUMENTATION      | COMPLIANCE         |
| • Kinematics       | • Actuator Stack   | • API Reference    | • Security         |
| • Neural Engine    | • Power Density    | • Whitepapers      | • Privacy Policy   |
| • Fleet Control    | • Tolerances       | • SDK v4.2         | • System Terms     |
+--------------------+--------------------+--------------------+--------------------+
| © 2026 BRAND_NAME INC. // ALL RIGHTS RESERVED.                [BACK TO APEX // ^]  |
+------------------------------------------------------------------------------------+
```

---

## 5. Component Structural Blueprints

### 5.1 The Mechanical Button
Buttons are physical switches: sharp or micro-radiused, with explicit states and technical brackets.

```html
<!-- HTML Structure -->
<button class="chassis-btn chassis-btn--primary">
  <span class="btn-prefix">//</span>
  <span class="btn-label">DEPLOY SYSTEM</span>
  <span class="btn-indicator"></span>
</button>
```

```css
/* CSS Mechanics */
.chassis-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: 2px; /* Industrial micro-radius */
  border: 1px solid var(--border-structural);
  background: var(--surface-panel);
  color: var(--text-monolithic);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.chassis-btn:hover {
  border-color: var(--border-focus);
  background: var(--surface-elevated);
}

.chassis-btn .btn-prefix {
  opacity: 0.4;
}

.chassis-btn .btn-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--accent-indicator);
}
```

---

### 5.2 The Chassis Card (Bento Cell)
Cards must have a clear 3-part internal anatomy: **Header Rail**, **Body Viewport**, **Footer Telemetry**.

```html
<!-- HTML Structure -->
<div class="chassis-card">
  <!-- Top Rail -->
  <div class="card-rail-top">
    <span class="card-index">01 // KINEMATICS</span>
    <span class="card-status">LIVE</span>
  </div>
  
  <!-- Core Body -->
  <div class="card-content">
    <h3 class="card-title">Rotary Joint Dynamics</h3>
    <p class="card-desc">Low backlash planetary gearboxes with integrated absolute encoders.</p>
  </div>
  
  <!-- Viewport / Stage -->
  <div class="card-viewport">
    <div class="corner-mark top-left">┌</div>
    <div class="corner-mark top-right">┐</div>
    <!-- Visual / 3D Canvas / Chart -->
    <div class="corner-mark bottom-left">└</div>
    <div class="corner-mark bottom-right">┘</div>
  </div>
  
  <!-- Bottom Telemetry Rail -->
  <div class="card-rail-bottom">
    <span class="telemetry-unit">TORQUE: 480 NM</span>
    <span class="telemetry-unit">BANDWIDTH: 1000 HZ</span>
  </div>
</div>
```

---

### 5.3 Reticle Crosshairs & Corner Brackets (Scaffolding Tokens)
Used to frame images, video stages, or highlight points of interest.

```css
/* Corner bracket styling using CSS pseudo-elements */
.bracket-stage {
  position: relative;
  border: 1px solid var(--border-subtle);
  padding: 24px;
}

.bracket-stage::before {
  content: "┌";
  position: absolute;
  top: -8px;
  left: -8px;
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--text-telemetry);
}

.bracket-stage::after {
  content: "┘";
  position: absolute;
  bottom: -8px;
  right: -8px;
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--text-telemetry);
}
```

---

### 5.4 The Telemetry Metric Block
For high-impact statistics and specifications.

```html
<div class="metric-block">
  <div class="metric-header">
    <span class="metric-index">[02]</span>
    <span class="metric-label">RESPONSE TIME</span>
  </div>
  <div class="metric-value">
    <span class="value-number">2.4</span>
    <span class="value-unit">ms</span>
  </div>
  <div class="metric-footer">
    <span class="metric-delta">▲ 4.2x faster</span>
    <span class="metric-standard">vs. Industry Mean</span>
  </div>
</div>
```

---

## 6. Typographic Structural Hierarchy

Humanoid typography operates on a strict **Three-Tier Engine**:

| Tier | Role | Typeface Category | Case & Tracking | Leading |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Monolithic Display** | Primary statements, hero headlines | Neo-grotesque or Geometrical Sans | Sentence or ALL-CAPS, tracking `-0.03em` to `-0.04em` | Ultra-tight `0.95` to `1.05` |
| **Tier 2: Telemetry & Metadata** | Labels, indices, specs, coordinates | Strict Monospace | ALL-CAPS, tracking `+0.05em` to `+0.08em` | Loose `1.4` to `1.6` |
| **Tier 3: Utilitarian Body** | Descriptions, whitepapers, documentation| Neutral Sans-Serif | Sentence case, tracking `-0.01em` | Standard `1.5` to `1.6` |

### Typographic Structural Rules:
1. **Never center telemetry tags**: Telemetry and metadata are always aligned left, right, or justified across the chassis rail.
2. **Numeric Rigor**: All tabular data and metrics must use `font-variant-numeric: tabular-nums` to guarantee aligned decimal columns.
3. **Prefixing**: Always precede structural labels with technical signifiers: `01 //`, `SYS_`, `REF:`, `[#]`.

---

## 7. Spatial Cadence & Geometry Physics

### 7.1 The 4px / 8px Industrial Cadence
All margins, paddings, and heights must align to strict 8px multiples:
- `4px`: Micro-gaps (between status dot and label)
- `8px`: Internal chip padding, compact button gaps
- `16px`: Card padding (mobile), standard component spacing
- `24px`: Standard container padding (desktop)
- `32px`: Section metadata separation
- `64px`: Standard inter-section hairline divider offset
- `96px` to `128px`: Hero section padding

### 7.2 Corner Radius Logic
Humanoid design avoids round, bubbly corners:
- **Sharp Industrial (Default)**: `0px` to `2px` for main structural panels, bento cells, and buttons.
- **Controlled Mechanical**: `4px` to `6px` maximum for secondary interactive containers.
- **Pill Capsules (Telemetry Only)**: `9999px` reserved strictly for status pills (`• LIVE`) and coordinate chips.

---

## 8. Kinematics & Motion Physics

Mechanical objects do not bounce like rubber balls. Humanoid interface transitions are **snappy, calibrated, and dampened**.

### 8.1 Motion Parameters
- **Damping Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (High initial velocity, smooth mechanical deceleration).
- **Fast Response**: Standard transitions are `120ms` to `180ms`. Never exceed `300ms` for standard interactive UI.

### 8.2 Kinematic Hover Behaviors
- **Border Activation**: The hairline border brightens from `var(--border-structural)` to `var(--border-focus)`.
- **Coordinate Scrub**: Crosshairs (`+`) or reticle markers animate outward by `2px` on card hover.
- **Data Counter Roll**: Numeric specs rapidly cycle numbers before locking onto the final verified value.

---

## 9. Multi-Brand Adaptation & Skinning Guide

To apply this structural architecture to different brands, keep the HTML/DOM layout 100% identical and swap only the token values below:

### 9.1 Brand Archetype 1: Deep Tech / Robotics (Dark Chassis)
- `--surface-canvas`: `#050505`
- `--surface-panel`: `#0D0E11`
- `--border-structural`: `rgba(255, 255, 255, 0.12)`
- `--text-monolithic`: `#FFFFFF`
- `--accent-indicator`: `#FF3B00` (Safety Orange) or `#00E599` (Telemetry Green)
- **Primary Type**: *PP Neue Montreal* / *Space Mono*

### 9.2 Brand Archetype 2: Enterprise SaaS / Cloud Infrastructure (Light Chassis)
- `--surface-canvas`: `#F8F9FA`
- `--surface-panel`: `#FFFFFF`
- `--border-structural`: `rgba(0, 0, 0, 0.10)`
- `--text-monolithic`: `#0A0D14`
- `--accent-indicator`: `#2563EB` (Cobalt Electric Blue)
- **Primary Type**: *Inter* / *JetBrains Mono*

### 9.3 Brand Archetype 3: Bio-Medical / Clean Science
- `--surface-canvas`: `#FFFFFF`
- `--surface-panel`: `#F1F5F9`
- `--border-structural`: `#CBD5E1`
- `--text-monolithic`: `#0F172A`
- `--accent-indicator`: `#06B6D4` (Cyan Diagnostic)
- **Primary Type**: *Plus Jakarta Sans* / *IBM Plex Mono*

### 9.4 Brand Archetype 4: Luxury / Modernist Architecture
- `--surface-canvas`: `#121212`
- `--surface-panel`: `#1A1A1A`
- `--border-structural`: `rgba(255, 255, 255, 0.18)`
- `--text-monolithic`: `#F4F4F0`
- `--accent-indicator`: `#D4AF37` (Muted Metallic Gold)
- **Primary Type**: *Monument Extended* / *Courier Prime*

---

## Checklist for New Websites Using This System

When starting any new web project with the Humanoid structural aesthetic:
- [ ] **1. Scaffolding First**: Lay out the 12-column grid with 0px gap hairline borders before adding imagery or colors.
- [ ] **2. Telemetry Ribbon**: Position the fixed/sticky top navigation with breadcrumb coordinates and live system status.
- [ ] **3. Monolithic Hero Hierarchy**: Ensure the main title is tightly tracked with an accompanying 3-4 metric spec HUD rail.
- [ ] **4. Hairline Borders**: Verify all cards and sections are divided by `1px` structural borders instead of heavy box shadows.
- [ ] **5. Registration Marks**: Add corner brackets (`┌ ┐ └ ┘`) and crosshair reticles (`+`) at major visual viewport intersections.
- [ ] **6. Tabular Numbers**: Apply `tabular-nums` to all metrics, data tables, and timestamps.
- [ ] **7. Snappy Kinematics**: Ensure all hover and transition states use dampened easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
