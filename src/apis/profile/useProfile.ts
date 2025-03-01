import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../api'

const fetchProfile = async () => {
  const response = await api.get('/profile')
  return response.data
}

const updateProfile = async (profileData: any) => {
  const response = await api.put('/profile', profileData)
  return response.data
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
  })

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  return {
    profile,
    isLoading,
    error,
    updateProfile: mutation.mutateAsync,
  }
}
