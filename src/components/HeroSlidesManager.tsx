import React, { useState } from 'react';
import { 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  EyeSlashIcon,
  PhotoIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { HeroSlide } from '../types';
import { PROPERTY_IMAGE_1 } from '../constants/images';

interface HeroSlidesManagerProps {
  slides: HeroSlide[];
  onUpdate: (id: number, updates: Partial<HeroSlide>) => void;
  onDelete: (id: number) => void;
  onAdd: (slide: Omit<HeroSlide, 'id'>) => void;
}

const defaultImage = PROPERTY_IMAGE_1;

export const HeroSlidesManager: React.FC<HeroSlidesManagerProps> = ({ 
  slides, 
  onUpdate, 
  onDelete,
  onAdd 
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<HeroSlide>>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({
    title: '',
    subtitle: '',
    image: '',
    active: true
  });

  const handleEdit = (slide: HeroSlide) => {
    setEditingId(slide.id);
    setEditForm(slide);
  };

  const handleSaveEdit = () => {
    if (editingId && editForm) {
      onUpdate(editingId, editForm);
      setEditingId(null);
      setEditForm({});
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleToggleActive = (slide: HeroSlide) => {
    onUpdate(slide.id, { active: !slide.active });
  };

  const handleDelete = (slide: HeroSlide) => {
    if (window.confirm(`Are you sure you want to delete "${slide.title}"?`)) {
      onDelete(slide.id);
    }
  };

  const handleAddSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.title || !addForm.subtitle) {
      alert('Please fill in title and subtitle');
      return;
    }
    
    onAdd({
      ...addForm,
      image: addForm.image || defaultImage
    });

    setAddForm({
      title: '',
      subtitle: '',
      image: '',
      active: true
    });
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Add New Slide Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Hero Slides</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {slides.length} total slides, {slides.filter(s => s.active).length} active
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Slide
        </button>
      </div>

      {/* Add Slide Form */}
      {showAddForm && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Hero Slide</h3>
          <form onSubmit={handleAddSlide} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={addForm.title}
                onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Find Your Perfect Land"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subtitle *
              </label>
              <textarea
                value={addForm.subtitle}
                onChange={(e) => setAddForm({ ...addForm, subtitle: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
                placeholder="Describe what makes this slide special..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Background Image URL
              </label>
              <input
                type="url"
                value={addForm.image}
                onChange={(e) => setAddForm({ ...addForm, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
                placeholder="https://example.com/image.jpg (leave empty for default)"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="addActive"
                checked={addForm.active}
                onChange={(e) => setAddForm({ ...addForm, active: e.target.checked })}
                className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500"
              />
              <label htmlFor="addActive" className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Active (show in carousel)
              </label>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Add Slide
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Slides List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Slide
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {slides.map((slide) => (
                <tr key={slide.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    {editingId === slide.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={editForm.title || ''}
                          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                          className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                          placeholder="Title"
                        />
                        <textarea
                          value={editForm.subtitle || ''}
                          onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
                          rows={2}
                          className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                          placeholder="Subtitle"
                        />
                        <input
                          type="url"
                          value={editForm.image || ''}
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                          className="w-full px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                          placeholder="Image URL"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-16 h-10 rounded object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {slide.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 max-w-md truncate">
                            {slide.subtitle}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleActive(slide)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                        slide.active
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {slide.active ? (
                        <>
                          <EyeIcon className="w-3 h-3 mr-1" />
                          Active
                        </>
                      ) : (
                        <>
                          <EyeSlashIcon className="w-3 h-3 mr-1" />
                          Inactive
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    {editingId === slide.id ? (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="px-3 py-1 text-xs bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(slide)}
                          className="p-1 text-gray-400 hover:text-emerald-600 transition-colors"
                          title="Edit"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(slide)}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {slides.length === 0 && (
          <div className="text-center py-12">
            <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No hero slides found</p>
          </div>
        )}
      </div>
    </div>
  );
};