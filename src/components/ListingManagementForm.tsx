import React, { useState } from 'react';
import { LandListing } from '../types';

interface ListingManagementFormProps {
  listing?: LandListing;
  onSubmit: (listing: Omit<LandListing, 'id'>) => void;
  onCancel: () => void;
}

export const ListingManagementForm: React.FC<ListingManagementFormProps> = ({
  listing,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<Partial<LandListing>>({
    title: listing?.title || '',
    price: listing?.price || '',
    status: listing?.status || 'Available',
    image: listing?.image || '',
    location: listing?.location || '',
    premium: listing?.premium || false,
    description: listing?.description || '',
    size: listing?.size || '',
    propertyType: listing?.propertyType || 'Residential',
    features: listing?.features || [''],
    amenities: listing?.amenities || [''],
    coordinates: listing?.coordinates || { lat: 0, lng: 0 },
    additionalImages: listing?.additionalImages || [],
    documents: listing?.documents || [{ title: '', description: '' }],
    nearbyFacilities: listing?.nearbyFacilities || [''],
    zoning: listing?.zoning || '',
    utilities: listing?.utilities || ['']
  });

  const [imageUrls, setImageUrls] = useState<string[]>([formData.image || '']);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleArrayInputChange = (
    index: number,
    value: string,
    field: keyof LandListing
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item, i) =>
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: keyof LandListing) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const removeArrayItem = (index: number, field: keyof LandListing) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }));
  };

  const handleDocumentChange = (
    index: number,
    field: 'title' | 'description',
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents?.map((doc, i) =>
        i === index ? { ...doc, [field]: value } : doc
      )
    }));
  };

  const addDocument = () => {
    setFormData(prev => ({
      ...prev,
      documents: [...(prev.documents || []), { title: '', description: '' }]
    }));
  };

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents?.filter((_, i) => i !== index)
    }));
  };

  const handleImageUrlChange = (index: number, value: string) => {
    const newUrls = [...imageUrls];
    newUrls[index] = value;
    setImageUrls(newUrls);
    
    if (index === 0) {
      setFormData(prev => ({ ...prev, image: value }));
    } else {
      setFormData(prev => ({
        ...prev,
        additionalImages: newUrls.slice(1)
      }));
    }
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrl = (index: number) => {
    const newUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newUrls);
    
    if (index === 0) {
      setFormData(prev => ({
        ...prev,
        image: newUrls[0] || '',
        additionalImages: newUrls.slice(1)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        additionalImages: newUrls.slice(1)
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.zoning) newErrors.zoning = 'Zoning is required';
    if (!imageUrls[0]) newErrors.mainImage = 'Main image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData as Omit<LandListing, 'id'>);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.title ? 'border-red-300' : ''
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.price ? 'border-red-300' : ''
              }`}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.location ? 'border-red-300' : ''
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
              errors.description ? 'border-red-300' : ''
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="premium"
            checked={formData.premium}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Premium Listing
          </label>
        </div>
      </div>

      {/* Property Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Property Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.size ? 'border-red-300' : ''
              }`}
            />
            {errors.size && (
              <p className="mt-1 text-sm text-red-600">{errors.size}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Zoning
            </label>
            <input
              type="text"
              name="zoning"
              value={formData.zoning}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                errors.zoning ? 'border-red-300' : ''
              }`}
            />
            {errors.zoning && (
              <p className="mt-1 text-sm text-red-600">{errors.zoning}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Latitude
              </label>
              <input
                type="number"
                step="0.0001"
                value={formData.coordinates?.lat}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    coordinates: { ...prev.coordinates!, lat: parseFloat(e.target.value) }
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Longitude
              </label>
              <input
                type="number"
                step="0.0001"
                value={formData.coordinates?.lng}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    coordinates: { ...prev.coordinates!, lng: parseFloat(e.target.value) }
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Images</h3>
        
        {imageUrls.map((url, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={url}
              onChange={(e) => handleImageUrlChange(index, e.target.value)}
              placeholder={index === 0 ? "Main image URL" : "Additional image URL"}
              className={`flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600 ${
                index === 0 && errors.mainImage ? 'border-red-300' : ''
              }`}
            />
            {imageUrls.length > 1 && (
              <button
                type="button"
                onClick={() => removeImageUrl(index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {errors.mainImage && (
          <p className="mt-1 text-sm text-red-600">{errors.mainImage}</p>
        )}
        <button
          type="button"
          onClick={addImageUrl}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Add Image URL
        </button>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Features</h3>
        
        {formData.features?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'features')}
              placeholder="Enter feature"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, 'features')}
              className="p-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('features')}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Add Feature
        </button>
      </div>

      {/* Utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Utilities</h3>
        
        {formData.utilities?.map((utility, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={utility}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'utilities')}
              placeholder="Enter utility"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, 'utilities')}
              className="p-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('utilities')}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Add Utility
        </button>
      </div>

      {/* Nearby Facilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Nearby Facilities</h3>
        
        {formData.nearbyFacilities?.map((facility, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={facility}
              onChange={(e) => handleArrayInputChange(index, e.target.value, 'nearbyFacilities')}
              placeholder="Enter nearby facility"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, 'nearbyFacilities')}
              className="p-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem('nearbyFacilities')}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Add Facility
        </button>
      </div>

      {/* Documents */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Documents</h3>
        
        {formData.documents?.map((doc, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={doc.title}
                onChange={(e) => handleDocumentChange(index, 'title', e.target.value)}
                placeholder="Document title"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <button
                type="button"
                onClick={() => removeDocument(index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
            <input
              type="text"
              value={doc.description}
              onChange={(e) => handleDocumentChange(index, 'description', e.target.value)}
              placeholder="Document description"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addDocument}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Add Document
        </button>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Save Listing
        </button>
      </div>
    </form>
  );
};