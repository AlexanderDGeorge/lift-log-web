interface IExercise {
    description: string
    equipment: Equipment[]
    name: string
    primaryMuscleGroup: Omit<MuscleGroup, 'Core'>
    secondaryMuscleGroups: MuscleGroup[]
    tips?: string
}

type Equipment = "Barbell" | "Dumbbells" | "Flat Bench" | "Incline Bench" | "Decline Bench" |
    "Smith Machine" | "Cable Machine" | "Bodyweight" | "Kettlebells" | "Medicine Ball" |
    "Resistance Band" | "Swiss Ball" | "TRX" | "Exercise Ball" | "Freemotion Machine" |
    "Hammerstrength Machine" | "Leg Press Machine" | "Leg Extension Machine" | "Leg Curl Machine" |
    "Chest Press Machine" | "Chest Fly Machine" | "Chest Pull Down Machine" | "Shoulder Press Machine" |
    "Shoulder Fly Machine" | "Shoulder Pull Down Machine" | "Bicep Curl Machine" | "Tricep Extension Machine" |
    "Tricep Push Down Machine" | "Abdominal Machine" | "Glute Machine" | "Hip Abduction Machine" |
    "Hip Adduction Machine" | "Hip Flexion Machine" | "Hip Extension Machine" | "Hip Rotation Machine" |
    "Hip Thrust Machine" | "Leg Press Machine" | "Leg Extension Machine" | "Leg Curl Machine" |
    "Loop Bands" | "Balance Trainer" | "Foam Roller" | "Plyo Box" | "Pull Up Bar"

type MuscleGroup = "Chest" | "Back" | "Shoulders" | "Front Shoulders" | "Biceps" | "Triceps" | "Forearms" |
    "Abs" | "Glutes" | "Quads" | "Hamstrings" | "Calves" | "Traps" | "Lats" | "Middle Back" | "Lower Back" |
    "Upper Back" | "Core" | "Neck" | "Lower Body" | "Upper Body" | "Full Body"
