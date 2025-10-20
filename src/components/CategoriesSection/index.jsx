import React from 'react';
import './Categories.scss';
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  // Translation-driven category groups
  const categoryGroups = [
    {
      title: t('categories.group1.title'),
      items: t('categories.group1.items', { returnObjects: true }),
    },
    {
      title: t('categories.group2.title'),
      items: t('categories.group2.items', { returnObjects: true }),
    },
  ];

  return (
    <div className="categories-side-by-side">
      <h1 className="main-title">{t('categories.main_title')}</h1>

      <div className="categories-grid">
        {categoryGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="category-group">
            {group.title && <h2 className="group-title">{group.title}</h2>}
            <ul className="category-list">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex} className="category-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
