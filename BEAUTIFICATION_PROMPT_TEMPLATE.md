# MOBILE-OPTIMIZED BEAUTIFICATION PROMPT TEMPLATE

## 🎯 COPY THIS PROMPT WHEN ASKING FOR UI/ANIMATION IMPROVEMENTS

---

**IMPORTANT: Mobile Performance Requirements**

When beautifying or enhancing this Next.js portfolio website, follow these STRICT rules to prevent mobile lag:

## ✅ ANIMATION RULES

### 1. **ALWAYS use `viewport={{ once: true }}`**
```tsx
// ✅ CORRECT - Animation plays once
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// ❌ WRONG - Causes lag on mobile
<motion.div
  viewport={{ once: false }}  // Never use this!
>
```

### 2. **Keep animations simple and fast**
```tsx
// ✅ CORRECT
transition={{ duration: 0.5, delay: index * 0.1 }}

// ❌ WRONG - Too slow
transition={{ duration: 1.2, delay: index * 0.2 }}
```

### 3. **Limit hover effects**
```tsx
// ✅ CORRECT - Subtle
whileHover={{ y: -2, scale: 1.02 }}

// ❌ WRONG - Too heavy
whileHover={{ y: -10, scale: 1.1, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
```

---

## 🚫 AVOID THESE CSS EFFECTS

### 1. **NO backdrop-blur on cards**
```css
/* ❌ WRONG - GPU intensive */
.card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

/* ✅ CORRECT - Use solid colors */
.card {
  background: rgb(255, 255, 255);
  /* OR very subtle transparency */
  background: rgba(255, 255, 255, 0.95);
}
```

### 2. **Use simple shadows**
```css
/* ❌ WRONG - Complex custom shadows */
box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);

/* ✅ CORRECT - Tailwind utilities */
className="shadow-sm hover:shadow-md"
```

### 3. **Minimize gradients**
```css
/* ❌ WRONG - Too many gradient layers */
background: linear-gradient(...), radial-gradient(...), linear-gradient(...);

/* ✅ CORRECT - Single gradient or solid color */
background: linear-gradient(to bottom, #f9fafb, #ffffff);
```

---

## ✅ ALLOWED BEAUTIFICATIONS

### **Safe to use:**
1. ✅ Color changes (solid colors preferred)
2. ✅ Border radius adjustments
3. ✅ Simple shadows (Tailwind: shadow-sm, shadow-md, shadow-lg)
4. ✅ Padding/margin adjustments
5. ✅ Typography improvements (font-weight, letter-spacing)
6. ✅ Single gradient backgrounds (not multiple layers)
7. ✅ Icon changes/additions
8. ✅ Layout improvements (grid, flex)

### **Use sparingly:**
1. ⚠️ Backdrop blur (only on non-scrolling elements like modals)
2. ⚠️ Complex shadows (max 2 layers)
3. ⚠️ Transform animations (keep subtle)
4. ⚠️ Multiple gradients (max 2 per element)

### **Never use:**
1. ❌ `viewport={{ once: false }}`
2. ❌ Continuous animations on scroll
3. ❌ Heavy blur effects on cards
4. ❌ Multiple nested motion.div wrappers
5. ❌ Complex 3D transforms
6. ❌ Video backgrounds
7. ❌ Parallax scrolling effects

---

## 📱 MOBILE-FIRST APPROACH

### **Structure your code like this:**

```tsx
// ✅ CORRECT - Simple, performant
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300"
>
  <h3 className="text-lg font-semibold text-neutral-900">Title</h3>
  <p className="text-sm text-neutral-600">Description</p>
</motion.div>

// ❌ WRONG - Too complex
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}  // ❌ Replays constantly
  transition={{ duration: 0.8, delay: index * 0.15 }}
  whileHover={{ y: -8, scale: 1.05 }}  // ❌ Too aggressive
  className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)]"  // ❌ Too heavy
>
  <motion.div  // ❌ Unnecessary nested motion
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
  >
    <h3>Title</h3>
  </motion.div>
</motion.div>
```

---

## 🎨 DESIGN GUIDELINES

### **Colors:**
- Use solid colors or very subtle transparency (95%+)
- Gradients: Max 2 colors, simple transitions
- Avoid multiple overlapping gradients

### **Spacing:**
- Use Tailwind spacing utilities (p-4, p-6, p-8)
- Consistent padding/margins across sections

### **Typography:**
- Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- Letter spacing: Use sparingly (tracking-tight, tracking-wide)
- Line height: 1.5-1.75 for readability

### **Borders:**
- Simple borders: border, border-2
- Rounded corners: rounded-lg, rounded-xl, rounded-2xl
- Avoid complex border gradients

---

## 📋 CHECKLIST BEFORE SUBMITTING

Before you provide any code changes, verify:

- [ ] All `viewport` props use `once: true`
- [ ] No `backdrop-blur` on scrolling cards
- [ ] Shadows are simple (Tailwind utilities preferred)
- [ ] Max 1-2 gradient layers per element
- [ ] Hover effects are subtle (y: -2 to -5 max)
- [ ] Animation duration ≤ 0.6s
- [ ] No nested motion.div wrappers
- [ ] No continuous scroll-triggered animations
- [ ] Tested mental model: "Will this lag on a 2-year-old phone?"

---

## 🚀 EXAMPLE PROMPT TO USE

"Please beautify the [SECTION NAME] section with modern design improvements. 

**CRITICAL REQUIREMENTS:**
- Use `viewport={{ once: true }}` for ALL animations
- NO backdrop-blur on cards
- Use simple Tailwind shadows only (shadow-sm, shadow-md)
- Keep hover effects subtle (max y: -5)
- Avoid multiple gradient layers
- Keep animations fast (duration: 0.5s max)
- Maintain mobile performance (no lag)

Focus on: [colors/spacing/typography/layout improvements you want]"

---

## 💡 GOOD BEAUTIFICATION IDEAS

### **Safe improvements that won't cause lag:**

1. **Color palette updates**
   - Change accent colors
   - Update gradient colors (single gradients only)
   - Improve text contrast

2. **Spacing refinements**
   - Adjust padding/margins
   - Improve card spacing
   - Better section gaps

3. **Typography enhancements**
   - Font weight adjustments
   - Letter spacing tweaks
   - Line height improvements

4. **Layout improvements**
   - Grid/flex adjustments
   - Better responsive breakpoints
   - Card arrangement changes

5. **Icon updates**
   - Replace icons
   - Add new icons
   - Icon size/color changes

6. **Border/corner refinements**
   - Rounded corner adjustments
   - Border color changes
   - Border width tweaks

---

## ⚡ PERFORMANCE MANTRA

**"If it replays on scroll or uses backdrop-blur, it will lag on mobile."**

Keep this in mind for every change!

---

## 📝 TEMPLATE RESPONSE FORMAT

When providing beautification code, structure it like this:

```
## Changes Made:
1. [Description of change]
2. [Description of change]

## Performance Impact:
✅ No mobile lag (all animations use once: true)
✅ No backdrop-blur used
✅ Simple shadows only
✅ Subtle hover effects

## Code:
[Your code here]
```

---

**Copy this entire document and include it in your prompt to ensure mobile-optimized beautifications!**
