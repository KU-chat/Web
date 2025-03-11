import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../api'

const fetchProfile = async () => {
  try {
    const response = await api.get('/profile')
    return response.data
  } catch (error) {
    console.error('fetchProfile error', error)
    throw error
  }
}

const updateProfile = async (profileData: any) => {
  try {
    const response = await api.put('/profile', profileData)
    return response.data
  } catch (error) {
    console.error('updateProfile error', error)
    throw error
  }
}

export const useProfile = () => {
  const queryClient = useQueryClient()

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      console.log('profileUpdate success...')
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
    onError: (error) => {
      console.error('profileUpdate failed', error)
    },
  })

  return {
    profile,
    isLoading,
    error,
    updateProfile: mutation.mutateAsync,
  }
}
