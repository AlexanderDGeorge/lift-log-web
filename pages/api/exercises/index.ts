import { firestoreDatabase } from '@/firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IExercise[]>
) {
    const exercisesRef = collection(firestoreDatabase, 'exercises')
    const exercisesQuery = query(exercisesRef, orderBy('name'))
    const exercisesSnap = await getDocs(exercisesQuery)

    res.status(200).json(exercisesSnap.docs.map(doc => doc.data() as IExercise))
}
