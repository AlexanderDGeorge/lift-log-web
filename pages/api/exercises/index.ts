import { firestoreDatabase } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IExercise[]>
) {
    const exercisesRef = collection(firestoreDatabase, 'exercises')
    const exercisesSnap = await getDocs(exercisesRef)

    res.status(200).json(exercisesSnap.docs.map(doc => doc.data() as IExercise))
}
